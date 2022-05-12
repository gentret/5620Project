/* Define array for "carousel" */
$(document).ready(function(){
  const cards=[
    {cardHead: 'Mike Tyson',cardImage: 'assets/img/cards/ace_of_clubs.png'},
    {cardHead: 'Tonya Harding',cardImage: 'assets/img/cards/2_of_clubs.png'},
    {cardHead: 'Miller',cardImage: 'assets/img/cards/3_of_clubs.png'},
    {cardHead: 'M. Lee',cardImage: 'assets/img/cards/4_of_clubs.png'},
    {cardHead: 'No Name Assigned',cardImage: 'assets/img/cards/5_of_clubs.png'},
    {cardHead: 'Maribel',cardImage: 'assets/img/cards/6_of_clubs.png'},
    {cardHead: 'Kurt Kobain',cardImage: 'assets/img/cards/7_of_clubs.png'},
    {cardHead: 'Joan Jett',cardImage: 'assets/img/cards/8_of_clubs.png'},
    {cardHead: 'Valk',cardImage: 'assets/img/cards/9_of_clubs.png'},
    {cardHead: 'Choy Hyojin',cardImage: 'assets/img/cards/10_of_clubs.png'},
    {cardHead: 'Jason',cardImage: 'assets/img/cards/jack_of_clubs.png'},
    {cardHead: 'Kim',cardImage: 'assets/img/cards/queen_of_clubs.png'},
    {cardHead: 'Kanye',cardImage: 'assets/img/cards/king_of_clubs.png'},
    {cardHead: 'Lebron James',cardImage: 'assets/img/cards/ace_of_diamonds.png'},
    {cardHead: 'Biles',cardImage: 'assets/img/cards/2_of_diamonds.png'},
    {cardHead: 'McElroy',cardImage: 'assets/img/cards/3_of_diamonds.png'},
    {cardHead: 'T. Lee',cardImage: 'assets/img/cards/4_of_diamonds.png'},
    {cardHead: 'Ryan Reynolds',cardImage: 'assets/img/cards/5_of_diamonds.png'},
    {cardHead: 'Xia Ling',cardImage: 'assets/img/cards/6_of_diamonds.png'},
    {cardHead: 'Marty',cardImage: 'assets/img/cards/7_of_diamonds.png'},
    {cardHead: 'No Name Assigned',cardImage: 'assets/img/cards/8_of_diamonds.png'},
    {cardHead: 'Felix',cardImage: 'assets/img/cards/9_of_diamonds.png'},
    {cardHead: 'No Name Assigned',cardImage: 'assets/img/cards/10_of_diamonds.png'},
    {cardHead: 'Gavin Newsome',cardImage: 'assets/img/cards/jack_of_diamonds.png'},
    {cardHead: 'Justine Musk',cardImage: 'assets/img/cards/queen_of_diamonds.png'},
    {cardHead: 'Elon Musk',cardImage: 'assets/img/cards/king_of_diamonds.png'},
    {cardHead: 'Shaquille Oneal',cardImage: 'assets/img/cards/ace_of_hearts.png'},
    {cardHead: 'Zhang',cardImage: 'assets/img/cards/2_of_hearts.png'},
    {cardHead: 'P. Barker',cardImage: 'assets/img/cards/3_of_hearts.png'},
    {cardHead: 'C. Barker',cardImage: 'assets/img/cards/4_of_hearts.png'},
    {cardHead: 'Dwayne "The Rock" Johnson',cardImage: 'assets/img/cards/5_of_hearts.png'},
    {cardHead: 'Betty White?',cardImage: 'assets/img/cards/6_of_hearts.png'},
    {cardHead: 'Paul',cardImage: 'assets/img/cards/7_of_hearts.png'},
    {cardHead: 'No Name Assigned',cardImage: 'assets/img/cards/8_of_hearts.png'},
    {cardHead: 'Max',cardImage: 'assets/img/cards/9_of_hearts.png'},
    {cardHead: 'Juliette Sebastian',cardImage: 'assets/img/cards/10_of_hearts.png'},
    {cardHead: 'Kelson',cardImage: 'assets/img/cards/jack_of_hearts.png'},
    {cardHead: 'Jane',cardImage: 'assets/img/cards/queen_of_hearts.png'},
    {cardHead: 'Kenny',cardImage: 'assets/img/cards/king_of_hearts.png'},
    {cardHead: 'Hussain Bolt',cardImage: 'assets/img/cards/ace_of_spades.png'},
    {cardHead: 'Serena Williams',cardImage: 'assets/img/cards/2_of_spades.png'},
    {cardHead: 'Uriel Avila',cardImage: 'assets/img/cards/3_of_spades.png'},
    {cardHead: 'Eakin',cardImage: 'assets/img/cards/4_of_spades.png'},
    {cardHead: 'Daniel Radcliff',cardImage: 'assets/img/cards/5_of_spades.png'},
    {cardHead: 'E. Watson',cardImage: 'assets/img/cards/6_of_spades.png'},
    {cardHead: 'Jimi Hendrix',cardImage: 'assets/img/cards/7_of_spades.png'},
    {cardHead: 'Cady King',cardImage: 'assets/img/cards/8_of_spades.png'},
    {cardHead: 'Blues',cardImage: 'assets/img/cards/9_of_spades.png'},
    {cardHead: 'Tiffany Chen',cardImage: 'assets/img/cards/10_of_spades.png'},
    {cardHead: 'Jake',cardImage: 'assets/img/cards/jack_of_spades.png'},
    {cardHead: 'Brianna',cardImage: 'assets/img/cards/queen_of_spades.png'},
    {cardHead: 'Preston',cardImage: 'assets/img/cards/king_of_spades.png'}
      ]
  
const cardContainer=$('#cardCarousel'); // Identify the carousel container

for(let i in cards) { // Loop through each of the objects in the array
  const cardTemplate=$('#cardTemplate').clone(); // Copy the template
  const cardText=$(cardTemplate.find('h1'));
  cardTemplate.removeClass('active'); // Remove the active class as only the first should be active
  if(i == 0) {cardTemplate.addClass('active')}; // Add the active for the first record
  cardTemplate.removeClass('d-none'); // Unhide
  cardTemplate.find('img').prop('src', cards[i].cardImage); // Set the image
  cardTemplate.find('img').prop('title', cards[i].cardHead); // Set the alt
  cardText.text(cards[i].cardHead); // Set the header
//  if(i < 13 || i > 38) {cardText.addClass('red')}; // Thought this would have been a nice effect, but couldn't get it to work.
  cardContainer.append(cardTemplate); // Append to the container
  
}

function hideNames() {
  $('#showName').prop('checked', false); // Uncheck showName
  $('.cardText').addClass('d-none'); // Hide name header
  
  }

function showNames() {
  $('#hideName').prop('checked', false); // Uncheck hideName
  $('.cardText').removeClass('d-none'); // Show name header
    
    
  }
   
  // Event handlers
  $('#hideName').on('click', hideNames);
  $('#showName').on('click', showNames);

});