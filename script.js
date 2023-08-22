const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions .dropdown');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana'];

function search(str) {
    str = str.toLowerCase(); 
    return fruit.filter(item => item.toLowerCase().includes(str));
}

function searchHandler(e) {
    const inputVal = e.target.value;
    const results = search(inputVal);
    showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
    suggestions.innerHTML = '';

    if (inputVal === '') {
        suggestions.style.display = 'none';
        return;
    }

    results.forEach(result => {
        const option = document.createElement('option');
        option.textContent = result;
        option.addEventListener('mouseover', highlightOption);
        option.addEventListener('mouseout', removeHighlight);
        option.addEventListener('click', useSuggestion);
        suggestions.appendChild(option);
    });

    suggestions.style.display = 'block';
}

function useSuggestion(e) {
    if (e.target.tagName === 'OPTION') {
        input.value = e.target.textContent;
        suggestions.style.display = 'none';
    }
}

function highlightOption(e) {
    e.target.classList.add('highlighted');
}

function removeHighlight(e) {
    e.target.classList.remove('highlighted');
}

input.addEventListener('input', searchHandler);
suggestions.addEventListener('change', useSuggestion); 