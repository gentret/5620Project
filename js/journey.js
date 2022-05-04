/* Define array for "carousel" */
$(document).ready(function () {
  const locations = [
    { locationTitle: "pic0 ", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic1 ", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic2 ", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic3 ", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic4 ", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic5 ", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic6 ", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic7 ", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic8 ", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic9 ", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic10", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic11", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic12", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic13", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic14", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic15", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic16", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic17", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic18", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic19", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic20", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic21", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic22", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic23", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic24", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic25", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic26", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic27", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic28", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic29", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic30", locationNarrative: "The green giant opened the gate." },
    { locationTitle: "pic31", locationNarrative: "The green giant opened the gate." }
  ]

  const locationCarousel = $('#locationCarousel'); // Identify the carousel container

  for (let i in locations) { // Loop through each of the objects in the array
    const locationTemplate = $('#locationTemplate').clone(); // Copy the template
    const imagePath = '/assets/img/journey/' + i + '.jpg'
    if (i == 0) { locationTemplate.addClass('active') }; // Add the active for the first record
    locationTemplate.removeClass('d-none'); // Unhide
    locationTemplate.find('img').prop('src', imagePath); // Set the image
    locationTemplate.find('h5').text(locations[i].locationTitle); // Set the header
    locationTemplate.find('p').text(locations[i].locationNarrative); // Set the narrative
    locationCarousel.append(locationTemplate); // Append to the container
    console.log(locationTemplate)

  }

});