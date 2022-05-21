export const trim = (str, symbol) => {
	let start = 0;
	let end = str.length - 1;

	while(str[start] === symbol) start++;
	while(str[end] === symbol) end--;

	if (end < start) return '';
	return str.substring(start, end + 1);
}

export const timeNewMsg = () => {
	const today = new Date();
	const time = today.getHours() + ":" + ((today.getMinutes() < 10) ? ("0" + today.getMinutes()) : today.getMinutes());
	return time;
}

export const sqrt = x => {
	const check = guess => {
		const answer = guess * guess - x;
		if (answer < 0) return -answer / x < 0.001;
		return answer / x < 0.001; 
	};
	
	const add = guess => {
	  return (guess + x / guess) / 2;
	};
	
	const result = guess => {
	  return (check(guess)) ? guess : result(add(guess))
	};

	return result(1.0);
  };

export const sqrt2 = n => {
    let avg= (a, b) => (a + b) / 2, c = 5, b;
    for(let i = 0; i < 20; i++) {
        b = n / c;
        c = avg(b, c);
    }
    return c;
}