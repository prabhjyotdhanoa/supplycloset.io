// the form answers can be seen here: https://docs.google.com/spreadsheets/d/1Y1WJyISvDqigF26P847mUXosiHGeJAwiQU_04SqBIN0/edit?usp=sharing
angular.module('myModule', ['angularjs-editable-table']);
passkeys = "10607 55555";

angular.module('myModule').controller('DataAddController', function($scope) {
  'ngInject';
  var vm = this;
  this.data = [{}];   
  this.options = {
        disableDelete: false,
        minRecords: 1, // Restrict removing rows if less than given count
        columns: [
            {
                title: "Truck Number",
                data: "truck",
                type: {
                    name: "input",
                    inputType: "text",
                    required: true,
                    class: "",
                    placeholder: "#"
                }
            },
            {
                title: "Diesel",
                data: "diesel",
                type: {
                    name: "input",
                    required: true,
                    class: "",
                    placeholder: "0"
                }
            },
            {
                title: "DEF",
                data: "def",
                type: {
                    name: "input",
                    required: true,
                    class: "",
                    placeholder: "-"
                }
            },
            {
                title: "Windshield Washer",
                data: "windshieldWasher",
                type: {
                    name: "input",
                    required: true,
                    class: "",
                    placeholder: "0"
                }
            },
            {
                title: "RED Antifreeze",
                data: "redAF",
                type: {
                    name: "input",
                    required: true,
                    class: "",
                    placeholder: "0"
                }
            },
            {
                title: "GREEN Antifreeze",
                data: "greenAF",
                type: {
                    name: "input",
                    required: true,
                    class: "",
                    placeholder: "0"
                }
            },
            {
                title: "Regular Engine Oil",
                data: "regEngineOil",
                type: {
                    name: "input",
                    required: true,
                    class: "",
                    placeholder: "0"
                }
            },
            {
                title: "Synthetic Engine Oil",
                data: "synEngineOil",
                type: {
                    name: "input",
                    required: true,
                    class: "",
                    placeholder: "0"
                }
            },
            {
                title: "Password",
                data: "password",
                type: {
                    name: "input",
                    required: true,
                    class: "",
                    placeholder: "-"
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
        pageLength: 20,
    };
  
  vm.response = JSON.stringify({data:[]});
  vm.submitEnabled = false;

  $scope.$watch('vm.data', function(newval, oldval) {    
    vm.submitEnabled = vm.data.length > 0; // do more fancy checks before allowing the form to submit
    //vm.submitEnabled = vm.data.substring(vm.response.length-8, vm.response.length-3).includes("10607 55555")
    vm.response = JSON.stringify(newval);//sync the value back to hidden field
    //console.log(vm.response.substring(vm.response.length-8, vm.response.length-3).toString())
    //console.log(vm.response.substring(vm.response.length-8, vm.response.length-3).includes("10607 55555"))
    //vm.submitEnabled = passkeys.includes(vm.response.substring(vm.response.length-8, vm.response.length-3).toString())
  }, true);
  vm.onLoad = function() {
    if (window.submitted || false) {
      window.submitted = false;
    }
  };
});
