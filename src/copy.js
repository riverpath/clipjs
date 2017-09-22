
(function(wind,document){

    div=document.createElement('div')
    div.id='huaban_script'
    div.setAttribute('style','width: 100%; height: 30px; text-align:center; background-color:white; position: fixed; top: 0;opacity:0.75;')
    div.innerHTML='悬浮',
    document.body.appendChild(div)

    var input=document.createElement('input');
    input.id='data';
    input.setAttribute('value','hello');
    div.appendChild(input);

    var btn1=document.createElement('button');
    btn1.id='copy';
    btn1.innerHTML='复制';
    div.appendChild(btn1);

    var btn2=document.createElement('button');
    btn2.id='cut';
    btn2.innerHTML='剪贴';
   div.appendChild(btn2);
    
    document.getElementById('copy').onclick = function() {
        var test = new clipBoard(document.getElementById('data'), {
            beforeCopy: function() {
                alert('开始复制');
            },
            copy: function() {
                return document.getElementById('data').value;
            },
            afterCopy: function() {
                alert('复制成功！');
            }
        });
    };
    document.getElementById('cut').onclick = function() {
        var test = new clipBoard(document.getElementById('data'), {});
        test.cut();
    };
    document.getElementById('paste').onclick = function() {
        var a = new clipBoard(document.getElementById('data'), {});
        a.paste();
    };
})(window,document)