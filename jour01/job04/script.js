year = prompt("Année ?");
result = bisextile(2020);
document.write(result);

function bisextile(année)
{
    var jour = new Date(année,2,0).getDate();

    if( jour == 29)
    {
        return(true);
    }
    else
    {
        return(false);
    }
}
