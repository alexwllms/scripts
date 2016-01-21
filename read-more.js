const $element = $('[data-collapsible]');
const $content = $('[data-collapsible-element]');
const $description = $('[data-collapsible-description]');

if ($description.text().length > 300) {
  $content.addClass('is-collapsed');
  $element.append('<a class="l-recommendation__button delta" data-collapsible-trigger>Read more</a>');
}

const $trigger = $('[data-collapsible-trigger]');

$element.each(function(){
  $trigger.on('click', function(event){
    event.preventDefault();
    $content.toggleClass('is-collapsed');
  });
});
