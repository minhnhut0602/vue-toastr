'use strict';
new Vue({
    el: '#app',
    data: function data() {
        return {};
    },
    components: {
        'vue-toastr': window.vueToastr
    },
    methods: {
        add: function() {
            this.$refs.toastr.e("this.$refs.toastr.e");
            this.$refs.toastr.s("this.$refs.toastr.s");
            this.$refs.toastr.w("this.$refs.toastr.w");
            this.$refs.toastr.i("this.$refs.toastr.i");
            //console.log(this.$refs.toastr);
            // if you send String default setting working.
            this.$refs.toastr.Add("Working With Default Options,closed 5 sec.");
            // Add another Toast
            var VooAaa = this.$refs.toastr.Add({
                title: 'Hi Click And See : ', // + (Math.random() * 10).toString(),
                msg: '<p id="test">AA</p><br>This timeout 5 sec.. but manuel closed 2 sec.', // + (Math.random() * 10).toString(),
                type: 'warning',
                position: 'toast-top-left',
                timeout: 5000,
                clickClose: false,
                onClosed: function() {
                    alert("onClosed");
                },
                onCreated: function() {
                    // get from test id from toast component.
                    // if component not created you cant access this.
                    alert("onCreated " + document.getElementById("test").innerHTML);
                },
                onClicked: function() {
                    alert("onClicked");
                }
            });
            //console.log(VooAaa);
            // You can close manuel this.
            setTimeout(function() {
                this.$refs.toastr.Close(VooAaa);
            }.bind(this), 2000);
            //this.$refs.toastr.close(VooAaa);
            // You Can Change Default Toast Type
            this.$refs.toastr.defaultTimeout = 3000; // default timeout : 5000
            // You Can Change Default Toast Type
            this.$refs.toastr.defaultType = "error"; // default type : success
            // You Can Change Default Position
            this.$refs.toastr.defaultPosition = "toast-bottom-left" // default position: toast-top-right
            this.$refs.toastr.Add("Default Type Position and timeout is Changed, closed 3 sec.");
        }
    }
});