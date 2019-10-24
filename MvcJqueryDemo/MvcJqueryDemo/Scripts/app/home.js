$(document).ready(function () {
    {
        getDataForSelect();
    }
});

function getDataForSelect() {
    $.ajax({
        url: "/api/Values/GetValues",
        type:"GET",
        contentType: "application/json",        
        success: function (data) {
            renderSelect(data);
        },
        error: function (error) {
            alert(error);
        }
       
    });
}
function renderSelect(data) {
    //'<select id="valueSelect">'
    //    + ' < option value = "value1" > value1</option >'
    //    + ' <option value="value1">value1</option>'
    //    + '</select >';
    var select = $('#valueSelect');
    var options = '';
    for (var i = 0; i < data.length; i++) {
        options += "<option value='" + data[i] + "'>" + data[i]+"</option>";
    }
    select.html(options);
}
$("#btnSubmit").click(function () {
    var label = $("#lblResult");
    var value = $("#valueSelect").val();
    $.ajax({
        url: 'api/Values/AddValue?value=' + value,
        type: 'POST',
        contentType: "application/json",
        //data: JSON.stringify({ value: value }),
        success: function (data) {
            label.text(data);
        },
        error: function (err) {
            label.text(err);
        }
    });
});
$("#btnSubmitNew").click(function () {
    var label = $("#lblResult");
    var value = $("#valueSelect").val();
    $.ajax({
        url: 'api/Values/AddValueWithObject',
        type: 'POST',
        contentType: "application/json",
        data: JSON.stringify({ value: value }),
        success: function (data) {
            label.text(data);
        },
        error: function (err) {
            label.text(err);
        }
    });
});