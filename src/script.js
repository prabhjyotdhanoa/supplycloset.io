// the form answers can be seen here: https://docs.google.com/spreadsheets/d/1Y1WJyISvDqigF26P847mUXosiHGeJAwiQU_04SqBIN0/edit?usp=sharing
angular.module('myModule', ['angularjs-editable-table']);

angular.module('myModule').controller('DataAddController', function($scope) {
  'ngInject';
  var vm = this;
  this.data = [{"partNo":"SWAS_BRO_1","qty":1,"bookingRef":"b4457897","notes":"suppose we might as well clarify our intentions here"}];   
  this.options = {
        disableDelete: false,
        minRecords: 1, // Restrict removing rows if less than given count
        columns: [
            {
                title: "Part Number",
                data: "partNo",
                type: {
                    name: "input",
                    required: true,
                    class: "text-center",
                    placeholder: "Enter part number"
                }
            },
            {
                title: "QTY",
                data: "qty",
                type: {
                    name: "input",
                    inputType: "text",
                    inputType: "number",
                    required: true,
                    class: "",
                    placeholder: "Enter quantity"
                }
            },
            {
                title: "Booking ref",
                data: "bookingRef",
                type: {
                    name: "input",
                    required: true,
                    class: "",
                    placeholder: "Enter booking reference"
                }
            },
            {
                title: "Notes",
                data: "notes",
                type: {
                    name: "input",
                    required: false,
                    class: "",
                    placeholder: ""
                }
            },
        ],
        callbacks: {

        },
        classes: {
            table: "table table-sm table-bordered",
            tableWrapper: "table-wrapper",
            pagination: ""
        },
        closeButton: {
            label: "remove",
            iconClass: "mdi mdi-close-circle",
            buttonClass: "btn"
        },
        pageLength: 10,
    };
  
  
  vm.response = JSON.stringify({data:[]});
  vm.submitEnabled = false;
  $scope.$watch('vm.data', function(newval, oldval) {    
    vm.submitEnabled = vm.data.length > 0; // do more fancy checks before allowing the form to submit
    vm.response = JSON.stringify(newval);//sync the value back to hidden field
  }, true);
  vm.onLoad = function() {
    if (window.submitted || false) {
      window.submitted = false;
    }
  };
});