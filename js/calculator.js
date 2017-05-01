new Vue({

	el : '.container',
	data: {

		display : '',
		num: '',
		num2: '',
		operand: '',
		result: 0

	},

	methods:{

		displaynum_number:function(x){

			this.display += parseInt(x.toElement.innerHTML);

		},

		get_square_root:function(){

			this.num = this.display;


			if (Math.sqrt(parseInt(this.num))){

					this.display = Math.sqrt(parseInt(this.num));
			}

		},

		calculate_result:function(){

				switch(this.operand){

					case '+':
					
						this.num2 = this.display;
						this.result = (parseInt(this.num) + parseInt(this.num2));
						
					break;


					case '-':

						this.num2 = this.display;
						this.result = (parseInt(this.num) - parseInt(this.num2));
						
					break;

					case '*':

						this.num2 = this.display;
						this.result = (parseInt(this.num) * parseInt(this.num2));

					break;

					case '/':

						this.num2 = this.display;
						this.result = (parseInt(this.num) / parseInt(this.num2));

					break;


			}

			if(parseInt(this.result)>0){

		 		this.num =  0;
		 		this.num2 = 0;
				this.display = parseInt(this.result);	

			}else{


				this.display = 0;	
			}

			
		},

		get_operand:function(c){

			this.num = this.display;
			this.display ='';
			this.operand = c.toElement.innerHTML;


		}


	}
})