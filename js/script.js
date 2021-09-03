$.ajax({
    url:'https://pokeapi.co/api/v2/pokemon/charizard'
}).then(
  function(data){
   console.log(data);
  },
  function(error){
   console.log('not sure', error);
  }
);

const $pokemon = $("#pokemon")
const $image = $("#image")
const $type = $("#type");
const $xp = $("#xp");
const $height = $("#height");
const $health = $("#health");
const $attack = $("#attack");
const $defense = $("#defense");
const $input = $('input[type="text"]');


let pokeData;





function handleGetData(event){
    event.preventDefault();

    $.ajax({
        url:`https://pokeapi.co/api/v2/pokemon/${$input.val()}`
    }).then(
      function(data){
       console.log(data);
       pokeData = data;
       render($input.val(""));
       $image.attr('src',data.sprites.front_default);
       $pokemon.text(data.name);
       $type.text(data.types[0].type.name);
       $xp.text(data.base_experience);
       $height.text(data.height);
       $health.text(data.stats[0].base_stat)
       $attack.text(data.stats[1].base_stat)
       $defense.text(data.stats[2].base_stat)

      },
      function(error){
       console.log('not sure', error);
      }
    );
}



function render(){
$image.attr('src',pokeData.sprites.front_default);
$pokemon.text(pokeData.name)
$type.text(pokeData.types[0].type.name)
$xp.text(pokeData.base_experience)
$height.text(pokeData.height)
$health.text(pokeData.stats[0].base_stat)
$attack.text(pokeData.stats[1].base_stat)
$defense.text(pokeData.stats[2].base_stat)
}

$("form").on("submit", handleGetData)
