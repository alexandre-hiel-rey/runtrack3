<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Job03</title>
    <script src="../jquery.js"></script>
</head>
<body>
    <form action="index.php" method="POST">
    <input type="text" id="id" placeholder="Id">
    <input type="text" id="nom" placeholder="Name">
    <select name="Type" id="type" >
        <option value="bug">Bug</option>
        <option value="dragon">Dragon</option>
        <option value="electric">Electric</option>
        <option value="fairy">Fairy</option>
        <option value="fighting">Fighting</option>
        <option value="fire">Fire</option>
        <option value="flying">Flying</option>
        <option value="grass">Grass</option>
        <option value="ghost">Ghost</option>
        <option value="ground">Ground</option>
        <option value="ice">Ice</option>
        <option value="normal" selected>Normal</option>
        <option value="psychic">Psychic</option>
        <option value="poison">Poison</option>
        <option value="rock">Rock</option>
        <option value="steel">Steel</option>
        <option value="water">Water</option>
    </select>
    <input type="submit" id="filtrer" value="Filtrer">
    </form>
</body>
</html>
<script src="../jquery.js"></script>
<script src="script.js"></script>