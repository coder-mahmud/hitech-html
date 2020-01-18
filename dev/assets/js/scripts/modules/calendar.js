class Calendar{
    constructor(){


$(".case_scheduler_form").submit(function(e){
    e.preventDefault();
    

    var product_time = $('.product_name').val();
    console.log(product_time);
    var start_day = $("#datepicker").datepicker({ dateFormat: 'dd,MM,yy' }).val();
    console.log(start_day);

    if(product_time != null  && start_day != ''){
        $('.loader').addClass('visible');
    setTimeout(function(){


    $('.processing_days').html('<u><span style="color:#000">= In-Lab:'+product_time+'</span></u>');

    $('#calendar-dates').empty();
    $('#calendar-dates2').empty();

    
    //console.log(res);
    start_day = moment(start_day);
    


    

    var starting_date = moment(start_day).format('DD'); 
    //console.log(starting_date);


    var first_day = start_day.format('dddd'), first_working_date;
    //console.log(first_day);
    switch (first_day) {
      case 'Saturday':
        first_working_date = parseInt(starting_date) + 2;
        break;
      case 'Sunday':
        first_working_date = parseInt(starting_date) + 1;
        break;
      default:
        first_working_date = parseInt(starting_date);

    }

    //console.log(first_working_date);


    //var this_day = moment(start_day).format('dddd');
    //console.log(this_day);
    var processing_time = parseInt(product_time);
    // var processing_time = 10;
    var total_day = 0, next_day, cur_day,required = 0;
    console.log('processing time :' + processing_time);
    cur_day = start_day;
    while(total_day < processing_time + 3){
        
        // next_day = cur_day.add(1, 'day');
        next_day = cur_day;
        var day = moment(next_day).format('dddd');
        if(day != 'Saturday' && day !='Sunday'){
            total_day++;
            
        }
        required++;
        cur_day= cur_day.add(1, 'day');;
    }
    console.log('required :' + required);

    var d = new Date();
    var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var month = d.getMonth();   //0-11
    var year = d.getFullYear(); //2014
    var first_date = month_name[month] + " " + 1 + " " + year;
    //September 1 2014
    var tmp = new Date(first_date).toDateString();
    //Mon Sep 01 2014 ...
    var first_day = tmp.substring(0, 3);    //Mon
    var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var day_no = day_name.indexOf(first_day);   //1
    var days = new Date(year, month+1, 0).getDate();    //30
    //Tue Sep 30 2014 ...
    var remaining_day = days - starting_date + 1;
    //console.log(remaining_day);
    var calendar = '', more_required;
    if(remaining_day >= required){
        calendar = get_calendar(day_no, days, starting_date, required);
        document.getElementById("calendar-dates").appendChild(calendar);
        document.getElementById("calendar-month-year").innerHTML = month_name[month]+" "+year;
    }else{
        calendar = get_calendar(day_no, days, starting_date, remaining_day);
        document.getElementById("calendar-dates").appendChild(calendar);
        document.getElementById("calendar-month-year").innerHTML = month_name[month]+" "+year;
        more_required = required - remaining_day;
        var next_month = month + 1;
        first_date = month_name[next_month] + " " + 1 + " " + year;
        tmp = new Date(first_date).toDateString();
        first_day = tmp.substring(0, 3);
        day_no = day_name.indexOf(first_day);
        days = new Date(year, next_month+1, 0).getDate();

        var calendar2 = get_calendar(day_no, days, 1, more_required);


        document.getElementById("calendar-dates2").appendChild(calendar2);
        document.getElementById("calendar-month-year2").innerHTML = month_name[next_month]+" "+year;

    }
    
    
    
    




    function get_calendar(day_no, days,starting_date,required){
          //console.log(starting_date);
            starting_date = parseInt(starting_date);
            var checked = [];

            //console.log(checked);
            for(var i = starting_date, inc = 0; i< starting_date + required; i++, inc++){

                checked = [...checked,starting_date + inc];
            }
       
            //console.log(checked);
            var number_of_days = checked.length;
            //console.log(' Length is ' + number_of_days);
            var last_delivery = checked[(number_of_days - 2)];
            //console.log(last_delivery);
            var expected_date = checked[(number_of_days - 1)];
        
        var table = document.createElement('table');
        var tr = document.createElement('tr');
        
        //row for the day letters
        for(var c=0; c<=6; c++){
            var td = document.createElement('td');
            td.innerHTML = "SMTWTFS"[c];
            tr.appendChild(td);
        }
        table.appendChild(tr);
        
        //create 2nd row empty
        tr = document.createElement('tr');
        var c;
        for(c=0; c<=6; c++){
            if(c == day_no){
                break;
            }
            var td = document.createElement('td');
            td.innerHTML = "";
            tr.appendChild(td);
        }
        // 2nd row days
        
        var count = 1;
        for(; c<=6; c++){
            
            var td = document.createElement('td');
            if(checked.includes(count)){
                td.classList.add("active");     
            }
            if(c== 0){
                td.classList.add("offday");
            }
            if(c  == 6){
                td.classList.add("offday");
            }
            if(count == first_working_date){
                td.classList.add("delivery");
            }
            td.innerHTML = count;
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
        
        //rest of the date rows
        for(var r=3; r<=7; r++){
            tr = document.createElement('tr');
            for(var c=0; c<=6; c++){
                if(count > days){
                    table.appendChild(tr);
                    return table;
                }
                var td = document.createElement('td');
                if(checked.includes(count)){
                    td.classList.add("active");     
                }
                if( c== 0){
                    td.classList.add("offday");
                }
                if(c== 6){
                    td.classList.add("offday");
                }

                if(count == first_working_date || count == last_delivery ){
                    td.classList.add("delivery");
                }
                if(count == expected_date){
                    td.classList.add("expected");
                }
                
                td.innerHTML = count;
                count++;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        return table;
    } // End get calendar


        $('#calendar-container').addClass('show');

        $('.loader').removeClass('visible');
    
    },3000);// setTimeout 







    }else{
        alert('Please select both field')
    }






});// change function
     


    }
}

export default Calendar;