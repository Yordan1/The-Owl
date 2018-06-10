	var cur_pos_x;
			var cur_pos_y;
			var move_speed = 50;	
			var output_console;
			var is_half = false;
			
			function move_owl(new_direction)
			{
				output_console.html('');
				
				switch(new_direction)
				{
					case 'right': cur_pos_x = Number($('#the_owl').offset().left) + move_speed; break;
					case 'left': cur_pos_x = Number($('#the_owl').offset().left) - move_speed; break;
					case 'top': cur_pos_y = Number($('#the_owl').offset().top) - move_speed; break;
					case 'bottom': cur_pos_y = Number($('#the_owl').offset().top) + move_speed; break;
					default: output_console.html('wrong direction: '+new_direction); break;
				}
				
				console.log(cur_pos_x);
				console.log(cur_pos_y);
				
				$('#the_owl').css('left', cur_pos_x);
				$('#the_owl').css('top', cur_pos_y);
			}
			
			function lock_owl()
			{
				$('body').html($('body').html() + '<img class="locked_owl" src="' + $('#the_owl').attr('src') + '" alt="buhal" style="left:'+cur_pos_x+'px; top:'+cur_pos_y+'px;" />');
				output_console.html('Готово! Кацнах! Мести отново...');
			}
			
			$(document).ready(function () {
				output_console = $('#output_console');
				cur_pos_x = 0;
				cur_pos_y = 0;
				
				$('input[type=button]').click(function () {
					move_owl($(this).data('direction'));	
				});	
				
				$('#lock_button').click(function (){
					lock_owl();
				});
				
				$('#the_owl').click(function (){
					output_console.html('Мен не можеш да убиеш - Аз още не съм кацнал! :)');
				});
				
				$('.locked_owl').click(function (){
					output_console.html('Ти си жесток убиец - Уби ме! :(');
					$(this).remove();
				});
				
				$('.locked_owl').hover(function (){
					output_console.html('ВНИМАВАЙ! Ако кликнеш върху мен, ще ме застреляш! :(');
				});
				
				$('#switch_button').click(function (){
					if(is_half == false)
					{
						$('#switch_button').html('&uArr;');
						$('#control_panel').css('top', '50%');
						$('#control_panel_column').css('top', '50%');
					}
					else
					{
						$('#switch_button').html('&dArr;');
						$('#control_panel').css('top', '100px');
						$('#control_panel_column').css('top', '100px');
					}
					
					is_half = !is_half;
				});
			});	