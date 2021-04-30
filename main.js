var quotes = [
  "2.I hope you're pleased with yourselves. We could all have been killed or worse, expelled. Now if you don't mind, I'm going to bed.~Hermione Granger",
  "3.You're a little scary sometimes, you know that? Brilliant ... but scary.~ Ron Weasley",
  "4.There are all kinds of courage, said Dumbledore, smiling. It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.~Dumbledore",
  "5.Yer a wizard Harry.~Hagrid",
  "6.The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution.~Dumbledore",
  "7.It is our choices, Harry, that show what we truly are, far more than our abilities.~Dumbledore",
  "8.Training for the ballet, Potter?~Malfoy",
  "9.I’ll be in my bedroom, making no noise and pretending I’m not there.~Harry",
  "10.Hearing voices no one else can hear isn’t a good sign, even in the wizarding world.~Ron",
  "11.I solemnly swear I am up to no good.~Harry",
  "12.But you know, happiness can be found even in the darkest of times, if one only remembers to turn on the light.~Dumbledore",
  "13.Why, dear boy, we don’t send wizards to Azkaban just for blowing up their aunts.~Cornelius Fudge",
  "14.I am what I am, an' I'm not ashamed. 'Never be ashamed,' my ol' dad used ter say, 'there's some who'll hold it against you, but they're not worth botherin' with.~Hagrid",
  "15.Just because it’s taken you three years to notice, Ron, doesn’t mean no one else has spotted I’m a girl! ~Hermione",
  "16.Teaching ~Mad Eye Moody",
  "17.Because I want to fix that in my memory forever, said Ron, his eyes closed and an uplifted expression on his face. Draco Malfoy,the amazing bouncing ferret . .",
  "18.Harry witnessed Professor McGonagall walking right past Peeves who was determinedly loosening a crystal chandelier and could have sworn he heard her tell the poltergeist out of the corner of her mouth, 'It unscrews the other way.",
  "19.Just because you have the emotional range of a teaspoon doesn't mean we all have.~Hermione",
  "20.I mean, it's sort of exciting, isn't it, breaking the rules? ~Hermione",
  "21.We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.~Sirius",
  "22.Things we lose have a way of coming back to us in the end, if not always in the way we expect.~Luna",
  "23.Wit beyond measure is man’s greatest treasure.~Luna",
  "24.The thing about growing up with Fred and George is that you sort of start thinking anything's possible if you've got enough nerve.~Ginny",
  "25.There is no need to call me ‘sir,’ Professor.~Harry",
  "26.Shut It ! ~Ginny",
  "27.It is the quality of one’s convictions that determines success, not the number of followers.~Lupin",
  "28.No, Harry, you listen,' said Hermione. 'We're coming with you. That was decided months ago — years, really.",
  "29.He must have known I'd run out on you.’ ‘No,’ Harry corrected him. ‘He must've always known you'd always want to come back.",
  "30.Always ~Snape",
  "31.And Percy was shaking his brother, and Ron was kneeling beside them, and Fred's eyes stared without seeing, the ghost of his last laugh still etched upon his face.",
  "32.I've always wanted to use that spell.~Professor Minerva McGonagall",
  "33.Every human life is worth the same, and worth saving~Kingsley Shackerbolt",
  "34.That wand’s more trouble than it’s worth,’ said Harry. ‘And quite honestly,’ he turned away from the painted portraits, thinking now only of the four-poster bed lying waiting for him in Gryffindor Tower, and wondering whether Kreacher might bring him a sandwich there, ‘I’ve had enough trouble for a lifetime.",
  "35.All was well",
  "1.Mr. and Mrs. Dursley of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.",
]
var i = 0

function change() {
    document.getElementById("quotes").innerHTML = quotes[i];
    i++
    if (i == 35) {
        i = 0;
    }
}
