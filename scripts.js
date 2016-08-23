$(function() {
    console.log('page ready');
    // iife form and page load message

    $('.navbar-header').html('<h1>Acme Explosives!</h1>');
    $('.navbar-header').append('<img id="tnt" src="/img/dynamite.jpg">').hide().show(300);
    $('.navbar-header').append('<img id="fireworks" src="/img/Scan-130817-0010.jpg" style="float: right"> ').hide().show(300);

    $.ajax({
        url: "categories.json"
    }).done(function(fillOption) {
        console.log("the contents of categories.json");
        console.log(fillOption);
        var categories = fillOption.categories;
        var results = "";
        for (var cat in categories) {
          console.log("cat is", categories[cat].name);
            var newitem = `<option> ${categories[cat].name}</option>`;
            results += newitem;

        };
        $("#parent").empty();
        $("#parent").html(results);
        console.log("results", results);

    });
}());









        // console.log(fillOption);

        //     $("#parent").empty();
        //     $.each(fillOption, function () {
        //         $("#parent").append($("<option></option>").val(this['id']).html(this['name']));
        //     });
        // });
