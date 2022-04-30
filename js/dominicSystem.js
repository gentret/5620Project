var data = {
    id: '01',
    name: 'Uriel',
    age: 31,
    maritalStatus: true
}

console.log(data['maritalStatus'])

// var elem connects to the headding names: id, name, age, marritalStatus
for (var elem in data) {

    // Displaus the headding names
    // console.log(elem)

    // Displaus the headding names and their values
    console.log(elem, data[elem]);
}


// Which one is correct?
// This ObjArr has embeded objects[tools] and arrays {exams}
// This ObjArr has embeded arrays[tools] and objects {exams}


// The Creation of the Dominic System Object Array.
// An arran with an object inbeded. Inbeded in another array and object
const dominicSystemObjectArray = [
    {
        id: '00',
        dsAbbreviation: "OO",
        firstName: 'Olive',
        lastName: 'Oyl',
        action: 'eating',
        object: 'spinach',
        story: 'Olive Oyl is flirting with Popeye while eating spinach.',
        tools: ['Memory Palace', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '01',
        dsAbbreviation: "OA",
        firstName: 'Neo',
        lastName: 'The One',
        action: 'stops',
        object: 'bullets',
        story: 'Neo dove into Mr. Smith after stoping the bullets. His hydrogen core exploded red in color',
        tools: ['Memory Palace', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 78,
            midterm: 85, 
            final: 86
        }
    },{
        id: '02',
        dsAbbreviation: "OB",
        firstName: 'Obi-Wan',
        lastName: 'Kenobi',
        action: 'swinging',
        object: 'light-sabre',
        story: 'His light-sabre pulls helium out of the sun',
        tools: ['Memory Palace', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 88,
            midterm: 83, 
            final: 89
        }
    },{
        id: '03',
        dsAbbreviation: "OC",
        firstName: 'C-3PO',
        lastName: '',
        action: 'badgering',
        object: 'R2-D2',
        story: 'C-3PO is sumo wrestling R2-D2 in a trench for a lithium fix!',
        tools: ['Memory Palace', 'Deck of Cards'],
        complete: false,
        exception: false,
        exams: { 
            quiz: 88,
            midterm: 83, 
            final: 89
        }
    },{
        id: '04',
        dsAbbreviation: "OD",
        firstName: 'Oscar',
        lastName: 'de la Joya',
        action: 'celebrates',
        object: 'win',
        story: 'Oscar de la Joya is celebrating his Olyinpic win.',
        tools: ['Pi', 'Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '05',
        dsAbbreviation: "OE",
        firstName: 'Omar',
        lastName: 'Epps',
        action: 'diving',
        object: 'second-base',
        story: 'Omar dove was bored on second base.',
        tools: ['Pi', 'Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '06',
        dsAbbreviation: "OS",
        firstName: 'O.J.',
        lastName: 'Simpson',
        action: 'driving',
        object: 'bronco',
        story: 'OJ Simpson and his bronco incinerate into carbon.',
        tools: ['Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '07',
        dsAbbreviation: "OG",
        firstName: 'James',
        lastName: 'Bond',
        action: 'crashes',
        object: 'DB9',
        story: 'James Bond used Nitorgren in the DB9 and flew through the sky.',
        tools: ['Pi', 'Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: true,
        exams: { 
            quiz: 89,
            midterm: 94, 
            final: 88
        }
    },{
        id: '08',
        dsAbbreviation: "OH",
        firstName: 'Oliver',
        lastName: 'Hardy',
        action: 'laughing',
        object: 'hysterically',
        story: 'Oliver Hardy is laughing hysterically on the sofa as he gasped for oxygen.',
        tools: ['Pi', 'Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '09',
        dsAbbreviation: "ON",
        firstName: 'Olivia',
        lastName: 'Newton-John',
        action: 'flirting',
        object: 'Danny Zuko',
        story: 'In the bathroom, ONJ grabbed flourine then rinsed her face with soap.',
        tools: ['Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '10',
        dsAbbreviation: "AO",
        firstName: 'Ashley',
        lastName: 'Alsen',
        action: 'falls-off',
        object: 'bed',
        story: 'Ashley is admiring her neon sign in Richmond, VA.',
        tools: [ 'Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '11',
        dsAbbreviation: "AA",
        firstName: 'Alonso',
        lastName: 'Avila',
        action: 'smoking',
        object: 'meats',
        story: 'Aloson Avila is adding the perfect amount of sodium to the the meat.',
        tools: ['Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '12',
        dsAbbreviation: "AB",
        firstName: 'Antonio',
        lastName: 'Banderas',
        action: 'makes',
        object: 'sword',
        story: 'Antonio Banderas made a sword os magnesium so thin it looked NoRMal.',
        tools: ['Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '13',
        dsAbbreviation: "AC",
        firstName: 'Al',
        lastName: 'capone',
        action: 'bribes',
        object: 'judge',
        story: 'Al Capone had the foresight to build an aluminum dam in providence, RI.',
        tools: ['Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '14',
        dsAbbreviation: "AD",
        firstName: 'Albus',
        lastName: 'Dumbledore',
        action: 'points',
        object: 'wand',
        story: 'Albus Dumbledore, battleing with Voldermot, points a silicon wand through the door.',
        tools: ['Pi', 'Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '15',
        dsAbbreviation: "AE",
        firstName: 'Amanda',
        lastName: 'Emery',
        action: 'skinny-dipping',
        object: 'jacuzzi',
        story: '.',
        tools: ['Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: false,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '16',
        dsAbbreviation: "AS",
        firstName: 'Arnold',
        lastName: 'Scwarzenegger',
        action: 'shoots',
        object: 'T-1000',
        story: 'Arnolds watch is made out of sulfur; and it stinks.',
        tools: ['Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '17',
        dsAbbreviation: "AG",
        firstName: 'Ariana',
        lastName: 'Grande',
        action: 'swimming',
        object: 'pool',
        story: 'Ariana Grande is swimming in her chlorine tears filled pool.',
        tools: ['Pi', 'Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '18',
        dsAbbreviation: "AH",
        firstName: 'Anna',
        lastName: 'Hernandez',
        action: '',
        object: '',
        story: 'Anna Hernandez is something... Argon',
        tools: ['Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: false,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '19',
        dsAbbreviation: "AN",
        firstName: 'Alfred E.',
        lastName: 'Newman',
        action: 'smiling',
        object: 'teeth',
        story: 'Alfred E. Newmas twop twin-teeth are holding a postassium filled banana.',
        tools: ['Pi', 'Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '20',
        dsAbbreviation: "BO",
        firstName: 'Bo',
        lastName: 'Jackson',
        action: 'knows',
        object: 'football',
        story: "Bo Jackson's calcium filled nose smelles like roses.",
        tools: ['Pi', 'Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '21',
        dsAbbreviation: "BA",
        firstName: 'Ben',
        lastName: 'Affleck',
        action: 'pricked',
        object: 'needle',
        story: 'Ben Afflec felt the needle all the way to his Scandium.',
        tools: ['Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '22',
        dsAbbreviation: "BB",
        firstName: 'Bugs',
        lastName: 'Bunny',
        action: 'leads',
        object: 'opera',
        story: 'Bugs Bunny is yanking on a titanium Onion.',
        tools: ['Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '23',
        dsAbbreviation: "BC",
        firstName: 'Bill',
        lastName: 'Clinton',
        action: 'smells',
        object: 'cigar',
        story: 'After Monica, Bill smelled the cigar with Vana; Vanadium.',
        tools: ['Pi', 'Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '24',
        dsAbbreviation: "BD",
        firstName: 'Bo',
        lastName: 'Derek',
        action: 'running',
        object: 'beach',
        story: 'Bo Derecks har-dredlocks are nade out of chromium.',
        tools: ['Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: true,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },{
        id: '25',
        dsAbbreviation: "BE",
        firstName: 'Billy',
        lastName: 'Elliot',
        action: 'dancing',
        object: 'ballet',
        story: '',
        tools: ['Memory Palace', 'Journey method', 'Deck of Cards'],
        complete: false,
        exception: false,
        exams: { 
            quiz: 87,
            midterm: 92, 
            final: 89
        }
    },

]

// Average .  This average is not working in the array.
// const avg = (dominicSystemObjectArray.exams.quiz + dominicSystemObjectArray.exams.midterm + dominicSystemObjectArray.exams.final);

console.log("First array typing in js. ", dominicSystemObjectArray);


// The Creation of the Dominic System Object Array.
// This should show the object array with the iten names followed by the values
let progressionDominicSystemArray = [...new Map(dominicSystemObjectArray.map((item) => [item["firstName"], item])).values()]


// Shows the lable name and value for each item. Currently therere are (6)
console.log("New Map Array ", progressionDominicSystemArray)

// Creating a test pregression on the DS and making test item id into the key Map(6)
let test_progressionDominicSystemArray_map = dominicSystemObjectArray.map((item) => [item["id"], item])


//  Shows the list as an array with the id, and the details for each entry
console.log("The test_progressionDominicSystemArray_map shows: ", test_progressionDominicSystemArray_map);

// testing the newMap object array contains the values in each id value
let test_progressionDominicSystemArray_newMap = new Map(test_progressionDominicSystemArray_map);

console.log(test_progressionDominicSystemArray_newMap);

// Create a list of all the keys and make an iterator. Single value as the key MapIterator
let test_uniqueObjArray_newMapKeys = test_progressionDominicSystemArray_newMap.keys();

console.log(test_uniqueObjArray_newMapKeys);


// Create a list of all the values and make an iterator for each one. All the fields with name PAO
let test_uniqueObjArray_newMapValues = test_progressionDominicSystemArray_newMap.values();

// These objects shows the DS entries with the details.  MapIterator
console.log(test_uniqueObjArray_newMapValues);

// A spread operator in a new array with backets [...] and dots.  (6)
// This made the onject array into another array from the test_uniqueObjArray_newMapValues
let test_uniqueObjArray_newMapValuesAsArray = [...test_uniqueObjArray_newMapValues];

console.log("DS Object in a new array ", test_uniqueObjArray_newMapValuesAsArray);

// Filter and show the last name for each ID as an object
const filteredLastName = dominicSystemObjectArray.map((item) => [item["lastName"], item])
 console.log("The last Names are " + filteredLastName);

 
 // Get the names of each of the DS list

// Creating a test pregression on the DS and making test item id into the key Map(6)
const firtNameDominicSystemArray_map = dominicSystemObjectArray.map((item) => [item["firstName"], item])

console.log("The firtName in the DS Array_map shows: ", firtNameDominicSystemArray_map);

// Creating a list of actions on the DS and making 
const actionArray_map = dominicSystemObjectArray.map((item) => [item["action"], item])

console.log("The action in the DS Array_map shows: ", actionArray_map);

// Creating a list of actions on the DS and making 
const dsObjectArray_map = dominicSystemObjectArray.map((item) => [item["object"], item])

console.log("The action in the DS Array_map shows: ", dsObjectArray_map);

// List the items in the Array with PAO status complete being true or false 
const dsCompletedObjectArray_map = dominicSystemObjectArray.map((item) => [item["complete"], item])
console.log("The PAO fields in the DS Array_map are: ", dsCompletedObjectArray_map);

// List the items in the Array with PAO being complete 
const dsIncompleteObjectArray_map = dominicSystemObjectArray.map((item) => [item["complete"], item])
    // Need to filter and make new lists between true and false    
//return dominicSystemObjectArray.complete == false;
console.log("The PAO fields are all completed in the DS Array_map are: ", dsIncompleteObjectArray_map);


console.log("Sorting by first and last name, PAO")

// Sort the list of the items is the DS by lastName
const sortLastname = dominicSystemObjectArray.sort(function(a, b) {
    if (a.lastName.toLowerCase() < b.lastName.toLowerCase()
    ) return -1;
    if (a.lastName.toLocaleLowerCase() > b.lastName.toLocaleLowerCase()
    ) return 1;
    return 0;
});
console.log("Sorting the array by lastname")
console.log(sortLastname);

// Sort the list of the items is the DS by firstName
const sortFirstName = dominicSystemObjectArray.sort(function(a, b) {
    if (a.firstName.toLowerCase() < b.firstName.toLowerCase()
    ) return -1;
    if (a.firstName.toLocaleLowerCase() > b.firstName.toLocaleLowerCase()
    ) return 1;
    return 0;
});
console.log("Sorting the array by firstName")
console.log(sortFirstName);

// Sort the list of the items is the DS by action
const sortAction = dominicSystemObjectArray.sort(function(a, b) {
    if (a.action.toLowerCase() < b.action.toLowerCase()
    ) return -1;
    if (a.action.toLocaleLowerCase() > b.action.toLocaleLowerCase()
    ) return 1;
    return 0;
});
console.log("Sorting the array by Action")
console.log(sortAction);

// Sort the list of the items is the DS by object
const sortObject = dominicSystemObjectArray.sort(function(a, b) {
    if (a.object.toLowerCase() < b.object.toLowerCase()
    ) return -1;
    if (a.object.toLocaleLowerCase() > b.object.toLocaleLowerCase()
    ) return 1;
    return 0;
});
console.log("Sorting the array by the PAO object field")
console.log(sortObject);

// Sort the list of the items is the exams by quiz
const sortExamsQuiz = dominicSystemObjectArray.sort(function(a, b) {
    return a.exams.quiz - b.exams.quiz;
});
console.log("Sorting the array by the exams")
console.log(sortExamsQuiz);

// Sort the list of the items is the exams by midterm
const sortExamsMidterm = dominicSystemObjectArray.sort(function(a, b) {
    return a.exams.midterm - b.exams.midterm;
});
console.log("Sorting the array by the Midterms")
console.log(sortExamsMidterm);

// Sort the list of the items is the exams by final
const sortExamsFinals = dominicSystemObjectArray.sort(function(a, b) {
    return a.exams.final - b.exams.final;
});
console.log("Sorting the array by the Finals")
console.log(sortExamsFinals);

// Sort the list of the items is the exams by tools
// Sortin the tools is not working
const sortTools = dominicSystemObjectArray.sort(function(a, b) {
    return a.tools - b.tools;
});
console.log("Sorting the array by the Tools")
console.log(sortTools);

// Sort Ascending the list of ids 
const sortAscendingIDs = dominicSystemObjectArray.sort(function(a, b) {
    return a.id - b.id;
});
console.log("Sort Ascending the array by IDs")
console.log(sortAscendingIDs);

// Sort Descending the list of ids 
const sortDescendingIDs = dominicSystemObjectArray.sort(function(a, b) {
    return  b.id - a.id;
});
console.log("Sort Descending the array by IDs")
console.log(sortDescendingIDs);

// Indexing the items that are not complete and need to do
// dsNumbers that are incomplete
const findTodo = function(myTodos, action) {
    const index =myTodos.findIndex(function(todo, index) {
    return todo.action.toLocaleLowerCase() === action.toLocaleLowerCase()
    })
}

console.log(findTodo);
