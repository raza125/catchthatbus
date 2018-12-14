var vm = new Vue({
    el: '#example',
    data: {
      showWordIndex: null,
      times: [
        {'hour':'12','minute':'00','type':'AM'}, 
        {'hour':'12','minute':'30','type':'AM'}, 
        {'hour':'1','minute':'00','type':'AM'}, 
        {'hour':'1','minute':'30','type':'AM'}, 
        {'hour':'2','minute':'00','type':'AM'}, 
        {'hour':'2','minute':'30','type':'AM'}, 
        {'hour':'3','minute':'00','type':'AM'}, 
        {'hour':'3','minute':'30','type':'AM'}, 
        {'hour':'4','minute':'00','type':'AM'}, 
        {'hour':'4','minute':'30','type':'AM'}, 
        {'hour':'5','minute':'00','type':'AM'}, 
        {'hour':'5','minute':'30','type':'AM'}, 
        {'hour':'6','minute':'00','type':'AM'}, 
        {'hour':'6','minute':'30','type':'AM'}, 
        {'hour':'7','minute':'00','type':'AM'}, 
        {'hour':'7','minute':'30','type':'AM'}, 
        {'hour':'8','minute':'00','type':'AM'}, 
        {'hour':'8','minute':'30','type':'AM'}, 
        {'hour':'9','minute':'00','type':'AM'}, 
        {'hour':'9','minute':'30','type':'AM'}, 
        {'hour':'10','minute':'00','type':'AM'}, 
        {'hour':'10','minute':'30','type':'AM'}, 
        {'hour':'11','minute':'00','type':'AM'}, 
        {'hour':'11','minute':'30','type':'AM'}, 
        {'hour':'12','minute':'00','type':'PM'}, 
        {'hour':'12','minute':'30','type':'PM'}, 
        {'hour':'1','minute':'00','type':'PM'}, 
        {'hour':'1','minute':'30','type':'PM'}, 
        {'hour':'2','minute':'00','type':'PM'}, 
        {'hour':'2','minute':'30','type':'PM'}, 
        {'hour':'3','minute':'00','type':'PM'}, 
        {'hour':'3','minute':'30','type':'PM'}, 
        {'hour':'4','minute':'00','type':'PM'}, 
        {'hour':'4','minute':'30','type':'PM'}, 
        {'hour':'5','minute':'00','type':'PM'}, 
        {'hour':'5','minute':'30','type':'PM'}, 
        {'hour':'6','minute':'00','type':'PM'}, 
        {'hour':'6','minute':'30','type':'PM'}, 
        {'hour':'7','minute':'00','type':'PM'}, 
        {'hour':'7','minute':'30','type':'PM'}, 
        {'hour':'8','minute':'00','type':'PM'}, 
        {'hour':'8','minute':'30','type':'PM'}, 
        {'hour':'9','minute':'00','type':'PM'}, 
        {'hour':'9','minute':'30','type':'PM'}, 
        {'hour':'10','minute':'00','type':'PM'}, 
        {'hour':'10','minute':'30','type':'PM'}, 
        {'hour':'11','minute':'00','type':'PM'}, 
        {'hour':'11','minute':'30','type':'PM'}, 
      ],
      active: false,
      timeData: {},
      startTime: {},
      startTimeString: '',
      endTime: '',
      eventLabel: '',
      eventMessage:'',
    },
    methods: {
        openModal: function(time,index){
            vm.startTime.hour = time.hour;
            vm.startTime.minute = time.minute;
            vm.startTime.type = time.type;
            vm.startTimeString=time.hour+':'+time.minute+' '+time.type;
        },
        saveTime: function() {
            if(vm.eventLabel === '')
                vm.eventLabel = '(No title)'
            vm.eventMessage = vm.eventLabel;
            // 'From:'+vm.startTimeString+' To:'+vm.endTime+' Desc:'+vm.eventLabel;
        }
    }
  });


  $(document).ready(function(){
        $('#startTime').mdtimepicker({
            readOnly:true,
            theme:'indigo',
            format:'h:mm tt'
        });
        $('#startTime').mdtimepicker().on('timechanged', function(e){
          vm.startTimeString = e.value;
        });
        $('#endTime').mdtimepicker({
            readOnly:true,
            theme:'indigo',
            format:'h:mm tt'
        });
        $('#endTime').mdtimepicker().on('timechanged', function(e){
            vm.endTime = e.value
        });
        
    });
    
  