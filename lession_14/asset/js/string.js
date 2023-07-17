window.onload = function(event) {
    var team  = "January, February, March, April, May, June, July, August, September, October, November, December";

    console.log(team.search('Feb'));

    console.log(team.substring(0, 11));
    console.log(team);

    console.log(team.toLocaleLowerCase());
    console.log(team.toLocaleUpperCase());

    team = team.replace('J', "Q");
    console.log(team);
}