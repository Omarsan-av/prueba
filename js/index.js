let question= document.getElementsByClassName('faq__background');
let icon = document.getElementsByClassName('material-icons');
let actual_position = '';
let old_position = '';

for(let i = 0; i < icon.length; i++)
{
   question[i].addEventListener('click', () =>
   {
      actual_position = i;

      if(actual_position !== '' && old_position === '')
      {
         icon[actual_position].textContent = "expand_more";
         old_position = actual_position;
      }

      else if(actual_position === old_position)
      {
         icon[actual_position].textContent = "expand_less";
         actual_position = '';
         old_position = '';
      }
      else 
      {
         icon[actual_position].textContent = "expand_more";
         icon[old_position].textContent = "expand_less";
         old_position = actual_position;
      }
   });
}
