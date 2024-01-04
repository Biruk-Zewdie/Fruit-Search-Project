const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions');


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


input.addEventListener('keyup', () =>{

//filter fruit lists using input words from search bar and put in results array.	
	let results = [];
	let inputs = input.value;

	//filter fruits array based on the string input
	if (inputs.length){
		results = fruit.filter((string)=>{
			return string.toLowerCase().includes(inputs.toLowerCase());
		});
	}

	//remove unnecessary space from the body.
	if (!results.length){
		suggestions.innerHTML = '';
	}

	// put filtered lists inside li's and display results of search
	const dropDown = results.map((lists) => {
		return `<li onclick = userSuggestion(this) > ${lists} </li>`;
	});
	
	//put list items in ul.
	suggestions.innerHTML = `<ul class = "lists"> ${dropDown.join('')} </ul>`;

});

//select by clicking from the drop down list (populate the search bar) and remove unselected items from the dropdown.
const userSuggestion = (lists) =>{
	input.value = lists.innerHTML;
	suggestions.innerHTML = '';
}