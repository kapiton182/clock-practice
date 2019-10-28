({
    doInit: function (component, event, helper) {
        // helper.TIME_OFFSET = component.get('v.timeOffset');
        // console.log(typeof helper.TIME_OFFSET);
        // console.log(typeof component.get('v.timeOffset'));
        // console.log(helper.TIME_OFFSET);
        helper.showTime(component);
        //console.log(component.get('v.timeOffset'));
        
    }
})
