
const resultValue = $("result").val();


function insertNumber(number){ 
    const existNumber = $("#result").val();
    $("#result").val(existNumber + number)
}

function clearResult(){ 
    $("#result").val('');
}

function calculate(){ 
  const result = eval( $("#result").val());
  $("#result").val(result);
}

function deleteNumber(){ 
    const presentValue = $("#result").val();
    if(presentValue!=''){ 
        $("#result").val(presentValue.slice (0,-1));
    }
}