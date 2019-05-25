(function($){
    var page = {
        init:function(dom,obj){

            this.fillHtml(dom,obj);
            this.bindEvent(dom,obj);
        },
        fillHtml:function(dom,obj){
            dom.empty();
            if(obj.current<1||obj.pageCount<1||obj.pageCount<obj.current)return;
            
            if(obj.current==1){
                dom.append('<a href="javascript:;" class="disable"><上一页</a>')
            }
            else{
                dom.append('<a href="javascript:;" class="prev"><上一页</a>')                
            }

            if(obj.pageCount<=7){
                for(var i=1;i<=7;i++){
                    if(i==obj.current){
                        dom.append( '<span class="active">'+i+'</span>')
                    }
                    else{
                        dom.append( '<a href="javascript:;" class="page">'+i+'</a>')
                    }
                }
            }
            else{
                if(obj.current>4){
                    dom.append('<a href="javascript:;" class="page">'+1+'</a>')
                    dom.append('<span class="omit">...</span>')
                }
                var start=obj.current-2,end=obj.current+2;
                if (obj.current<=4){
                    start=1;
                    end=6;
                }
                else if(obj.current>=obj.pageCount-3){ 
                    start=obj.pageCount-5;
                    end=obj.pageCount;
                }
                for(;start<=end;start++){
                    if(start==obj.current){
                        dom.append( '<span class="active">'+start+'</span>')
                    }
                    else{
                        dom.append( '<a href="javascript:; "class="page">'+start+'</a>')                        
                    }
                }
                if(obj.pageCount-obj.current>3){
                    dom.append('<span class="omit">...</span>')
                    dom.append('<a href="javascript:;" class="page">'+obj.pageCount+'</a>')
                }
            }

            if(obj.current<obj.pageCount){
                dom.append('<a href="javascript:;" class="next">下一页></a>')
            }
            else{
                dom.append('<a href="javascript:;" class="disable">下一页></a>')

            }

        },
        bindEvent:function(dom,obj){
            _this=this;
            dom.on('click','.page',function(){
                obj.current=parseInt($(this).text())
                _this.fillHtml(dom,obj)
                }
            )
            dom.on('click',function(e){
                var target=e.target;
                if(target.className=="prev"){
                    obj.current--;
                }
                else if(target.className=="next"){
                    obj.current++;
                }
                else return;
                _this.fillHtml(dom,obj);
            })
        }

    };
    $.fn.paging = function(options){
        var obj={
            pageCount:10,
            current:1
        }
        var args=$.extend(obj,options);
        page.init(this,args);
        console.log(this)

    };

})($);