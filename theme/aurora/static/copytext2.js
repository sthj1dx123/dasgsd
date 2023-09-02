var timerrr = null
/**
 *
 * @param dom 传递点击按钮的dom
 * @param text  复制的文本内容
 */
    function copyFun(dom, text, time = 2000, tip="复制成功") {
        // 定义出现的时间ms

        // 获取提示框的dom
        let $copyTip = document.querySelector('#copy-tip-box')
        let dec = document.querySelector('#copy-tip-box .copy-dec')
        dom.onclick = () => {
            
            clearTimeout(timerrr)
            let res = copyText(text)
            // 复制成功
            if (res) {
                dec.innerText = tip
                $copyTip.classList.add('active');
                // 出现提示后几秒消失
                timerrr = setTimeout(() => {
                    $copyTip.classList.remove('active');
                }, time)
            }
        }

    }

    function addCopyHtml(msg = "复制成功") {
        // let copyBox = document.querySelector('#copy-tip-box');
        let html = `<svg class="copy-icon" viewBox="64 64 896 896" data-icon="check-circle" fill="currentColor" aria-hidden="true"
         focusable="false">
        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
    </svg>
    <span class="copy-dec">${msg}</span>`

        let div = document.createElement('div');
        div.id = 'copy-tip-box';
        div.innerHTML = html;
        document.body.appendChild(div);
        // copyBox.innerHTML = html;
    }

    /**
     * @param text 需要复制的文本
     * @returns {boolean} 返回成功还是失败
     */
    function copyText(text) {
        var textareaC = document.createElement('textarea');
        textareaC.setAttribute('readonly', 'readonly'); //设置只读属性防止手机上弹出软键盘
        textareaC.value = text;
        document.body.appendChild(textareaC); //将textarea添加为body子元素
        textareaC.select();
        var res = document.execCommand('copy');
        document.body.removeChild(textareaC);//移除DOM元素
        return res;
    }
    // 添加复制的html 只需要调用一次
    addCopyHtml('复制成功！');

    


