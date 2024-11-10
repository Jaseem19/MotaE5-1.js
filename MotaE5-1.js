	function multiply() {
				
			var length = document.getElementById('length').value;
			var width = document.getElementById('width').value;
					
				length = Number(length);
				width = Number(width);
					
			var totalSqm = length * width;
					
				document.getElementById('result').textContent = totalSqm;
					
			var rugSize = 1;
					
					
			var rugsNeeded = Math.ceil(totalSqm / rugSize);
					
					
			document.getElementById('Ans').textContent = 'You need ' + rugsNeeded + ' small rugs.';
				}




