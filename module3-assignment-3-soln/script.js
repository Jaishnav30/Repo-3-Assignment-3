function generateListofNames() {
    const numberInput = document.getElementById('numberInput').value;
    const messageElement = document.getElementById('message');

    messageElement.textContent = '';

    if (numberInput === '14318') {
        const message = `Congratulations your first magic number is correct!!<br> <br> Here is your list:<br>
   ["Anni Johnson",
    "Annabel Smith",
    "Elina Brown",
    "Isadora Williams",
    "Gabby Jones",
    "Annemarie Garcia",
    "Calix Martinez",
    "Gabys Rodriguez",
    "Jonine Lee",
    "Elie Hernandez",
    "Isabel Clark",
    "Callahan Lewis",
    "Benicio Robinson",
    "Benton Walker",
    "Jonie Hall",
    "Dann Allen",
    "Calista Young",
    "Isabella King",
    "Annaliese Wright",
    "Danna Scott",
    "Gabra Adams",
    "Danika Baker",
    "Dana Gonzales",
    "Katherine Nelson",
    "Calista Carter",
    "Caline Mitchell",
    "Benedict Perez",
    "Frederic Roberts",
    "Lucky Turner",
    "Lucian Phillips",
    "Calvina Campbell",
    "Benito Parker",
    "Gabryel Evans",
    "Gabin Edwards",
    "Kata Collins",
    "Anne Stewart",
    "Gabriella Sanchez",
    "Gabriela Morris",
    "Jonard Rogers",
    "Freeda Reed",
    "Jonnie Cook",
    "Danitza Morgan",
    "Danielle Bell",
    "Hana Murphy",
    "Jonah Bailey",
    "Jaxka Rivera",
    "Eliezer Cooper",
    "Elijah Richardson",
    "Cali Cox",
    "Isabell Howard",
    "Jaxey Ward",
    "Gabran Hughes",
    "Jaxeef Peterson",
    "Annah Gray",
    "Jonna Ramirez",
    "Jonell James",
    "Elize Brooks",
    "Jaxdal Kelly",
    "Elizabella Sanders",
    "Freddie Price",
    "Lucia Bennett",
    "Isabela Wood",
    "Bennie Barnes",
    "Lucero Ross",
    "Katasha Henderson",
    "Gabina Coleman",
    "Kathi Jenkins",
    "Elinor Perry",
    "Danelle Powell",
    "Katharina Long",
    "Frederica Patterson",
    "Jaxnah Hughes",
    "Isana Flores",
    "Isandro Washington",
    "Danilo Butler",
    "Annika Simmons",
    "Kathie Foster",
    "Calyssa Gonzalez",
    "Lucca Bryant",
    "Danae Alexander",
    "Ben Russell",
    "Fredric Griffin",
    "Jones Hayes",
    "Freya Butler",
    "Jaxif Simmons",
    "Jonica Foster",
    "Caly Howard",
    "Elisheva Montgomery",
    "Lucius Cooper",
    "Dania Peterson",
    "Benedetta Reed",
    "Benjie Patterson",
    "Isael Richardson",
    "Jaxifah Cox",
    "Jaxtherina Howard",
    "Jonia Collins",
    "Gabriele Murphy",
    "Fredricka Rivera",
    "Benny Hughes",
    "Isaias Bennett",
    "Benji Ward",
    "Kath Scott",
    "Isaiah Kelly",
    "Katheryn Sanders",
    "Callum Price",
    "Hannah Henderson",
    "Annalise Coleman",
    "Gaby Jenkins",
    "Freddy Perry",
    "Daniela Powell",
    "Fredrika Long",
    "Jonathon Patterson",
    "Luciana Hughes",
    "Lucio Flores",
    "Fredrick Washington",
    "Elian Butler",
    "Kathleen Simmons",
    "Annette Foster",
    "Anna Gonzalez",
    "Katarina Bryant",
    "Lucan Alexander",
    "Jaxny Russell",
    "Isak Griffin",
    "Annalynn Hayes",
    "Calandra Butler",
    "Frederick Simmons",
    "Eliane Foster",
    "Calum Howard",
    "Annalisa Montgomery",
    "Jonas Cooper",
    "Danton Peterson",
    "Gabrielle Reed",
    "Benjamin Patterson",
    "Jonea Richardson",
    "Kate Cox",
    "Free Howard",
    "Gabriel Kelly",
    "Lucyna Sanders",
    "Gabryelle Price",
    "Jaxdey Henderson",
    "Annabell Coleman",
    "Jaxdel Jenkins",
    "Annalyn Perry",
    "Jaxnelore Powell",
    "Kathia Long",
    "Bentlee Patterson",
    "Elia Hughes",
    "Fredis Bennett",
    "Jaxia Ward",
    "Isaiha Kelly",
    "Calvin Sanders",
    "Fredrik Price",
    "Caleb Henderson",
    "Isaque Coleman",
    "Lucy Jenkins",
    "Eliza Perry",
    "Bentley Powell",
    "Fredrich Long",
    "Annie Patterson",
    "Calhoun Hughes",
    "Lucyna Flores",
    "Gabe Washington",
    "Lucienne Butler",
    "Katerina Simmons",
    "Gabriele Foster",
    "Benedicto Gonzalez",
    "Jonette Bryant",
    "Annabeth Alexander",
    "Beni Russell",
    "Freedie Griffin",
    "Isaella Hayes",
    "Bennet Butler",
    "Janna Simmons",
    "Isaac Foster",
    "Gabrian Howard",
    "Elizabeth Montgomery",
    "Daniella Cooper",
    "Elin Peterson",
    "Jonina Reed",
    "Jaxnibal Patterson",
    "Jaxika Richardson",
    "Katalina Cox",
    "Bennett Howard",
    "Jaxnah Kelly",
    "Jaxniel Sanders",
    "Danis Price",
    "Lucena Henderson",
    "Danica Coleman",
    "Elizabetta Jenkins",
    "Daniel Perry"]`;
        messageElement.innerHTML = message.replace(/\n/g, '<br>');
    } else {
        messageElement.textContent = 'The number is wrong, try again.';
    }
}
