import Link from "next/link";
import Head from 'next/head'
import { ButtonGroup, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

/* CURRENT WANTS
    -want a general list of trophies next to checkmarks to mark when they're complete
    -trophies associated with number goals should have increment and decrement buttons
*/

//strings to be associated with each trophy
var card = "Cooper Calling Card: Collect your first Sly mask";
var shopping = "Online Shopping: Make a Thiefnet purchase (paraglider)";
var wardrobe = "Wardrobe Malfunction: Unlock the Samurai Armor costume";
var familyMatters = "Family Matters: Rescue Riochi Cooper";
var downgrade = "Downgrade: Complete any alter ego without leveling up"; //easiest on somethings fishy hack
var door = "What's Behind Door Number One?: Unlock any costume gate"; //done in hundo altitude sickness
var lowCal = "Low Calorie Sushi: Beat El Jefe";
var cloud = "Cloud City: Beat El Jefe without losing health"; //can restart checkpoint on each tower still works
var gunsling = "Gunslinger: Rescue Tennesse 'Kid' Cooper";
var war = "Ancient Warfare 3: Crackshot 10 enemies in 65 seconds with Tennessee"; //most easily done in blind date or cooper for hire probably
var cheers = "Cheers: Don't miss a single glass of sasparilla in Saloon Bug";
var ninja = "Radical Ninja: Stealth kill 15 enemies without alerting anyone"; //maybe better suited after buying silent kill/sprint
var dustBun = "Dust Bunnies: Beat Toothpick";
var collector = "Clockwerk Collector: Collect over 20 treasures"; //done by end of stone age recon
var bigfoot = "Bigfoot For Real: Rescue 'Bob' Cooper";
var apollo = "Apollo Wins: Have a perfect Training Montage with Bob"; //only the end montage counts
var waddle = "Waddle Waddle: Shoot 40 penguins as Carmelita"; //counter
var savings = "Savings Account: Unlock Episode 3 Safe";
var shiny = "Oh Look it's Shiny: Pickpocket 10 unique items"; //will be misc later, gotten naturally on way to all loots trophy, placing here for now until sonic run review
var bear = "Bearcicle: Beat The Grizz";
var boom = "Boom Stick: Rescue Sir Galleth Cooper";
var climb = "Crazed Climber: Scale dragon lair in under 90 seconds"; //easy for speedrunner to do naturally
var mouse = "I Need a Mouse Trap: Discover the identity of 'The Black Knight'";
var zen = "Zenny, Gil, or Just Loot: Unlock Episode 4 Safe";
var arrow = "Golden Arrow: Complete archery minigame without hitting friendly targets";
var penelope = "I Believe the Time is Now: Defeat 'The Black Knight'";
var turban = "Keep Your Turban On: Meet Salim al-Kupar";
var party = "Costume Party: Collect all 5 costumes";
var checkPlease = "Check Please: Unlock Episode 5 Safe";
var chopper = "Get to the Chopper: Don't take any damage during Up in Smoke";
var arcade = "Arcade Operator: Repair any arcade machine/Collect all trophies in one episode"; //end of rugrats split
var child = "Child of the 80's: Beat the top score of one hideout arcade"; //placed here since ep 5 arcade is first we do
var gross = "Hubba Hubba: Don't miss a beat in the Carmelita dance minigame"; //shakes don't count
var hero = "Hero Tech: Battle with Ratchet's wrench"; //50 mask unlockable extra, won't happen until in All rolled up
var homeSick = "Home Sick: Beat Miss Decibel";
var air = "Airborne: Paraglide for at least 10 seconds without geysers"; //last ep 3 costume launch gets this naturally
var putItIn = "Put It In Your 401K: Unlock Episode 2 Safe";
var playSafe= "Play It Safe: Unlock the Episode 1 Safe";
var quarter = "Quarter Cruncher: Unlock all 6 arcade machines"; //will happen after all treasures and safes collected
var sparrow = "Sparrow Approves: Use the compass(L3) 500 times during an objective"; //needs a counter, probably too hard to keep track of 500 L3 clicks
var open = "The Cooper Open: Have a 20 hit rally with Bentley in each hideout"; //needs a way to track each hideout rally, do after arcades
var navigate = "Navigate like Drake: Look at every map in every episode"; //need way to keep track of all maps
var unpackage = "Unexpected Package: Place 60 bombs in enemy pockets with Bentley"; //needs counter and maybe moved depending on best routing
var lunch = "Lunch Money: Slam 100 enemies as Murray"; //needs counter
var proud = "Hassan Would Be Proud: Pickpocket a full collection of every item"; //need way to track these, hopefully have them all before end of game
var eightBit = "8-bit Bentley Style: Beat every hideout arcade's high score";
var payday = "Payday: Purchase every item in the Thiefnet"; //figure out total coins needed and what gadgets are worth an early buy
var mark = "Mark Your Territory: Collect all 60 Sly masks"; //final by tennessee in epilogue
var final = "Final Chapter?: Beat Le Paradox";
var mask = "Mask and Stripes Forever: Collect every trophy"; //auto check when all others are checked?

export default function Sly4(){
    //temporary
    return (
        <div>
            <Head>
                <title>Trophy Tracker</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/ps4-platinum-trophy.jpg" />
            </Head>
            <h1>Sly Cooper: Thieves in Time Trophy List</h1>
            <Form>
                <Form.Check type='checkbox' id="card" label={card} />
                <Form.Check type='checkbox' id="shopping" label={shopping} />
                <Form.Check type='checkbox' id="wardrobe" label={wardrobe} />
                <Form.Check type='checkbox' id="family-matters" label={familyMatters} />
                <Form.Check type='checkbox' id="downgrade" label={downgrade} />
                <Form.Check type='checkbox' id="door" label={door} />
                <Form.Check type='checkbox' id="lowCal" label={lowCal} />
                <Form.Check type='checkbox' id="cloud" label={cloud} />
                <Form.Check type='checkbox' id="gunslinger" label={gunsling} />
                <Form.Check type='checkbox' id="war" label={war} />
                <Form.Check type='checkbox' id="cheers" label={cheers} />
                <Form.Check type='checkbox' id="ninja" label={ninja} />
                <Form.Check type='checkbox' id="dustBun" label={dustBun} />
                <Form.Check type='checkbox' id="collector" label={collector} />
                <Form.Check type='checkbox' id="bigfoot" label={bigfoot} />
                <Form.Check type='checkbox' id="apollo" label={apollo} />
                <Form.Check type='checkbox' id="waddle" label={waddle} />
                <Form.Check type='checkbox' id="savings" label={savings} />
                <Form.Check type='checkbox' id="shiny" label={shiny} />
                <Form.Check type='checkbox' id="bear" label={bear} />
                <Form.Check type='checkbox' id="boom" label={boom} />
                <Form.Check type='checkbox' id="climb" label={climb} />
                <Form.Check type='checkbox' id="mouse" label={mouse} />
                <Form.Check type='checkbox' id="zen" label={zen} />
                <Form.Check type='checkbox' id="arrow" label={arrow} />
                <Form.Check type='checkbox' id="penelope" label={penelope} />
                <Form.Check type='checkbox' id="turban" label={turban} />
                <Form.Check type='checkbox' id="party" label={party} />
                <Form.Check type='checkbox' id="checkPlease" label={checkPlease} />
                <Form.Check type='checkbox' id="chopper" label={chopper} />
                <Form.Check type='checkbox' id="arcade" label={arcade} />
                <Form.Check type='checkbox' id="child" label={child} />
                <Form.Check type='checkbox' id="gross" label={gross} />
                <Form.Check type='checkbox' id="hero" label={hero} />
                <Form.Check type='checkbox' id="homeSick" label={homeSick} />
                <Form.Check type='checkbox' id="air" label={air} />
                <Form.Check type='checkbox' id="putItIn" label={putItIn} />
                <Form.Check type='checkbox' id="playSafe" label={playSafe} />
                <Form.Check type='checkbox' id="quarter" label={quarter} />
                <Form.Check type='checkbox' id="sparrow" label={sparrow} />
                <Form.Check type='checkbox' id="open" label={open} />
                <Form.Check type='checkbox' id="navigate" label={navigate} />
                <Form.Check type='checkbox' id="package" label={unpackage} />
                <Form.Check type='checkbox' id="lunch" label={lunch} />
                <Form.Check type='checkbox' id="proud" label={proud} />
                <Form.Check type='checkbox' id="eightBit" label={eightBit} />
                <Form.Check type='checkbox' id="payday" label={payday} />
                <Form.Check type='checkbox' id="mark" label={mark} />
                <Form.Check type='checkbox' id="final" label={final} />
                <Form.Check type='checkbox' id="family-matters" label={mask} />
            </Form>
            <Link href="/">
                <a>Back to Home</a>
            </Link>
        </div>
    );
}

/* FUTURE WANTS
    -trophies with a number should automatically check mark when number hit or advance number to end on checkmark
    -should be maybe 2 columns, one of story/100% based trophies and the other being misc.
    -number based trophies should take a number input or do different mutiples of increment
    -animation when all check marks complete?
    -put all trophy labels in an object instead of a bunch of variables (will clean up formcheck code as well)
    -seperate check marks for loots and maps, maybe dropdown under their respective trophies
    -maybe a table with checkmark, name, objective, current count for number stuff
    -Have tips for how to get trophies 
    -different ordering of trophies depending on if for speedrunning or casual
*/