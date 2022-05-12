/* Define array for "carousel" */
$(document).ready(function () {
  const locations = [
    { locationTitle: "", locationNarrative: "" },
    { locationTitle: "Mom's Birthday", locationNarrative: "Mom delivered babies in the administrative building." },
    { locationTitle: "", locationNarrative: "" },
    { locationTitle: "", locationNarrative: "" },
    { locationTitle: "Doctor Visit @ 2pm", locationNarrative: "Doctor Vukashinovich removed your colon in Simpson Tower." },
    { locationTitle: "", locationNarrative: "" },
    { locationTitle: "", locationNarrative: "" },
    { locationTitle: "Meet with Jane @ 1pm", locationNarrative: "Your client hosts their site in La Kretz Hall." },
    { locationTitle: "", locationNarrative: "" },
    { locationTitle: "", locationNarrative: "" },
    { locationTitle: "", locationNarrative: "" },
    { locationTitle: "", locationNarrative: "" },
    { locationTitle: "", locationNarrative: "" },
    { locationTitle: "DMV @ 11am", locationNarrative: "Drive on over to the physical education building." },
    { locationTitle: "", locationNarrative: "" },
    { locationTitle: "", locationNarrative: "" },
    { locationTitle: "Louis @ 9am", locationNarrative: "Your contractor is part of a union. The STUDENT UNION." },
    { locationTitle: "", locationNarrative: "" },
    { locationTitle: "", locationNarrative: "" },
    { locationTitle: "", locationNarrative: "" },
    { locationTitle: "", locationNarrative: "" },
    { locationTitle: "", locationNarrative: "" },
    { locationTitle: "", locationNarrative: "" },
    { locationTitle: "Vacation", locationNarrative: "Find an umbrella to park it. Perhaps someplace tropical." },
    { locationTitle: "", locationNarrative: "" },
    { locationTitle: "", locationNarrative: "" },
    { locationTitle: "", locationNarrative: "" },
    { locationTitle: "", locationNarrative: "" },
    { locationTitle: "", locationNarrative: "" },
    { locationTitle: "", locationNarrative: "" },
    { locationTitle: "", locationNarrative: "" },
    { locationTitle: "", locationNarrative: "" }
  ]

  function getSuffix(i) {
    const j = i % 10;
    const  k = i % 100;
    if (j == 1 && k != 11) {
      return i + "st";
    }
    if (j == 2 && k != 12) {
      return i + "nd";
    }
    if (j == 3 && k != 13) {
      return i + "rd";
    }
    return i + "th";
  }

  const locationCarousel = $('#locationCarousel'); // Identify the carousel container
  for (let i in locations) { // Loop through each of the objects in the array
    const locationNumber = getSuffix(i);
    const locationHead = locationNumber + ': ' + locations[i].locationTitle;
    const locationTemplate = $('#locationTemplate').clone(); // Copy the template
    const imagePath = '/assets/img/journey/' + i + '.jpeg'
    if (i == 0) { locationTemplate.addClass('active') }; // Add the active for the first record
    locationTemplate.removeClass('d-none'); // Unhide
    locationTemplate.find('img').prop('src', imagePath); // Set the image
    locationTemplate.find('h2').text(locationHead); // Set the header
    locationTemplate.find('p').text(locations[i].locationNarrative); // Set the narrative
    locationCarousel.append(locationTemplate); // Append to the container
  }

});