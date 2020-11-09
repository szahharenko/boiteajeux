var index = 0;
var games = [];
jQuery('select[name=pJeu] option').each( (i,el) => {
    games.push({id: $(el).val(), name: el.innerText })
})

var createForm = function(game, code, name) {
 index++;
 var cols = game.find('.clLigneBloc');
 if(cols.length == 5) {
  var id = cols[1].innerText;
  cols[0].innerHTML = '<form id="form'+index+'" action="gestion.php" method="post" onsubmit="return validationUnique()"><input type="hidden" name="pAction" value="rejoindre"><input type="hidden" class="clInv" name="inv"><input type="hidden" name="id" value="'+code+'-'+id+'"><input type="image" src="./img/ico_join.png" alt="JOIN" class="clIcone" rel="popover" data-content="JOIN" onclick="return confirmJoin(' + index + ',\''+code+'\',\''+escape(name)+'\')" data-original-title=""></form>';
 }
 var next = jQuery(game).next();
 if(next.length && !next.is('.clListeEntete')) createForm(next, code, name);
}
games.forEach( (game) => {
 var head = jQuery('#head' + game.id);
 if(head.length) {
  var gameRow = head.next();
  createForm(gameRow,game.id,game.name);
 }
})
