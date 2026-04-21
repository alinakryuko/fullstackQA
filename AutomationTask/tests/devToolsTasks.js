// 1) Collect dropdown options https://the-internet.herokuapp.com/dropdown: 
{
  // Select dropdown
  const dropdown = document.querySelector('#dropdown');

  // Get options
  const options = Array.from(dropdown.options).map(option => option.text.trim());

  console.log('Dropdown options:', options);

    // Check if "Option 1" is present
  const hasOption1 = options.includes('Option 1');

  console.log('Contains "Option 1"?', hasOption1);
}

// 2) Fill the form https://www.techlistic.com/p/selenium-practice-form.html
const data = {
  firstname: 'Joe',
  lastname: 'Johnson',
  gender: 'Female',
  yearsOfExpirience: 7,
  profession: ['Automation Tester', 'Manual Tester'],
  tools: ['Selenium Webdriver', 'Selenium IDE'],
  continent: 'Asia'
};

// Fill first name
document.querySelector('input[name="firstname"]').value = data.firstname;

// Fill last name
document.querySelector('input[name="lastname"]').value = data.lastname;

// Select gender
document.querySelectorAll('input[name="sex"]').forEach(el => {
  if (el.nextSibling.textContent.trim() === data.gender) {
    el.click();
  }
});

// Select years of experience
document.querySelectorAll('input[name="exp"]').forEach(el => {
  if (el.nextSibling.textContent.trim() === String(data.yearsOfExpirience)) {
    el.click();
  }
});

// Select profession checkboxes
document.querySelectorAll('input[name="profession"]').forEach(el => {
  const label = el.nextSibling.textContent.trim();
  if (data.profession.includes(label)) {
    el.click();
  }
});

// Select tools checkboxes
document.querySelectorAll('input[type="checkbox"]').forEach(el => {
  const label = el.nextSibling.textContent.trim();
  if (data.tools.includes(label)) {
    el.click();
  }
});

// Select continent dropdown
const continentSelect = document.querySelector('#continents');
continentSelect.value = Array.from(continentSelect.options)
  .find(opt => opt.text.trim() === data.continent)?.value || '';

// Trigger change event (important for some pages)
continentSelect.dispatchEvent(new Event('change'));


console.log('Form filled successfully');

// 3) Network spy
 // Send in Postman GET with URL GET https://api.bazaarvoice.com/data/reviews.json?Filter=contentlocale:en*&Filter=ProductId:P39787544&Sort=Helpfulness:desc&Limit=30&Offset=0&Include=Products,Comments&Stats=Reviews&passkey=calXm2DyQVjcCy9agq85vmTJv5ELuuBCF2sdg4BnJzJus&apiversion=5.4&Locale=en_US