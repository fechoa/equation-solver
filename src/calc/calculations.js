import * as Helper from './utilities'

class Member {
	_value;
	_degree;

	constructor(value, degree) {
		this._value = value;
		this._degree = degree;
	}

	get value() {
		return this._value;
	}
	set value(value) {
		this._value = value;
	}
	get degree() {
		return this._degree;
	}
	get sign() {
		return this._sign;
	}
};

class Program {
	_members;
	_reducedForm;
	_maxDegree;
	_solution;

	get reducedForm() {
		return this._reducedForm;
	}

	get maxDegree() {
		return this._maxDegree;
	}

	#_checkValidSyntax = (num, mul, degree, sign,) => {
		if (isNaN(parseFloat(num))) throw `В уравнении есть ошибочка: "${num}" - не является числом 🥲`;
		if (mul !== '*') throw `Похоже ты ошибся, вместо "*" у тебя какая-то чепуха 😤`;
		if (degree[0] !== 'X' || degree[1] !== '^' || isNaN(+degree.substr(2))) throw `Ошибка в синтаксисе степени. Твоя степень равна ${degree}. Посмотрим на пример: X^10 🥲`;
		if (+degree.substr(2) < 0) throw `Отрицательная степень, давай-ка по-чесноку: "${+degree.substr(2)} < 0", Не так ли? 😇`
		if (sign) {
			if (sign !== '+' && sign !== '-') throw `Ошибка в операторе: ${sign}. Ты можешь использовать "+" или "-"  🤓`;
		}
	}

	#_updateMaxDegree = (degree) => {
		if (degree > this._maxDegree) this._maxDegree = degree;
	}

	#_pushMember = (value, degree, sign) => {
		if (sign) {
			value = sign === '+' ? value * 1 : value * -1;
		}

		const index = this._members.findIndex((el) => el._degree === degree);
		if (index != -1) {
			this._members[index].value = parseFloat((this._members[index].value + value).toFixed(1));
		} else {
			this._members.push(new Member(value, degree));
		}
	}

    #_addMembersToData = (monom, sign) => {
		for (let i = 0; i < monom.length; i += 4) {
			this.#_checkValidSyntax(monom[i], monom[i + 1], monom[i + 2], i + 4 > monom.length ? null : monom[i + 3]);
			this.#_pushMember(+monom[i] * sign, +monom[i + 2].substr(2), i === 0 ? null : monom[i - 1]);
			this.#_updateMaxDegree(+monom[i + 2].substr(2));
		}
    }

	#_checkValidInput = input => {
		let countEq = 0;
		input.split('').forEach(el =>  {
			if (!' 0123456789^X=*-+."'.includes(el)) throw `Похоже уравнение и вовсе неправильное! Изучи примерчики в разделе Помощь 🤖`;
			if (el === '=') countEq++;
		});
		if (countEq !== 1) throw `Пошло что-то не так 🙄\nРекомендую обратить внимание на количество знаков равно`;
	}

	#_buildReducedForm = () => {
		this._reducedForm = this._members.reduce((prev, curr) => {
			if (prev === '')
				return `${curr._value} * X^${curr._degree}`;
			return `${prev} ${curr._value >= 0 ? '+' : '-'} ${curr._value < 0 ? -curr._value : curr._value} * X^${curr._degree}`;
		}, '') + ' = 0';
	}

	#_findRoots = () => {
		if (this._maxDegree === 0) {
			if (this._reducedForm[0] === '0') {
				this._solution = `ROOTS:\nEquation has infinite number of roots`;
			} else {
				this._solution = `ROOTS:\nEquation has no roots`;
			}
		} else if (this._maxDegree === 1) {
			const aIndex = this._members.findIndex(el => el._degree === 1);
			const bIndex = this._members.findIndex(el => el._degree === 0);	
			const a =  aIndex >= 0 ? this._members[aIndex]._value : 0;
			const b =  bIndex >= 0 ? this._members[bIndex]._value : 0;

			if (a === 0 && b === 0) {
				this._solution = `ROOTS:\nEquation has infinite number of roots`;
			} else if (a === 0) {
				this._solution = `ROOTS:\nEquation has no roots`;
			} else {
				this._solution = `ROOTS:\n${-b / a}`;
			}
		} else if (this._maxDegree === 2) {
			const aIndex = this._members.findIndex(el => el._degree === 2);
			const bIndex = this._members.findIndex(el => el._degree === 1);
			const cIndex = this._members.findIndex(el => el._degree === 0);
			const a =  aIndex >= 0 ? this._members[aIndex]._value : 0;
			const b =  bIndex >= 0 ? this._members[bIndex]._value : 0;
			const c =  cIndex >= 0 ? this._members[cIndex]._value : 0;
			const di = (b * b) - 4 * a * c;

			if (di < 0) {
				this._solution = `ROOTS:\nEquation has no roots`;
			} else if (di === 0) {
				const root1 = ((-b + Helper.sqrt2(di)) / (2 * a)).toFixed(6);

				this._solution = `Discriminant is zero:\n${root1}`;
			} else {
				const root1 = ((-b + Helper.sqrt2(di)) / (2 * a)).toFixed(6);
				const root2 = ((-b - Helper.sqrt2(di)) / (2 * a)).toFixed(6);
				this._solution = `Discriminant is strictly positive, the two solutions are:\n${root1}, ${root2}`;
			}
		} else {
			this._solution = `The polynomial degree is strictly greater than 2, I can't solve`;
		}
	}
	
    constructor(input) {
		this.#_checkValidInput(input);
		
		this._members = [];
		this._maxDegree = 0;

		const sides = input.split('=');
		const leftSide = Helper.trim(sides[0].trim(), '"').split(' ').filter(el => el !== '');
		const rightSide = Helper.trim(sides[1].trim(), '"').split(' ').filter(el => el !== '');
		
		this.#_addMembersToData(leftSide, 1);
		this.#_addMembersToData(rightSide, -1);

		this.#_buildReducedForm();

		this.#_findRoots();
    }	
}


export const getAnswerData = (data) => {
	let program;
	try {
		program = new Program(data.text);
	} catch(e) {
		return {text: `${e}`, time: Helper.timeNewMsg(), user: false};
	}
	return {
		text: `🐜 REDUCED FORM:
${program.reducedForm}

📊 POLYNOMIAL DEGREE:  ${program.maxDegree}

🖇 ${program._solution}`,

		time: Helper.timeNewMsg(), 
		user: false,};
}
