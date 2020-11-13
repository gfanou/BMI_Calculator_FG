$(document).ready(
    function()
    {



        // add event handlers
        $("#calcMyBmi").click(showMyBmi);


        // all other functions (program logic)
        function showMyBmi() {
            // get data from input boxes

            // Measure of weight
            var weightMeasure = parseFloat($("#weightMeasure").val());

            // Measure of height
            var heightMeasure = parseFloat($("#heightMeasure").val());


            // Let's do math

            // calculate BMI

            var bmi = 703 * weightMeasure / (heightMeasure * heightMeasure)


                // Display result
            $("#bmiOutput").text(`Your Body Mass Index (BMI) is ${bmi.toFixed(1)}`);


        }

    }

);


