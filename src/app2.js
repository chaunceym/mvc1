import './app2.css'

import $ from 'jquery'

const $titleBar = $('#titleBar')
const $contentBar = $('#contentBar')

$titleBar.on('click','li',(e)=>{
    const $currentTarget = $(e.currentTarget)
    const index = $currentTarget.index()
    $contentBar.children().eq(index).addClass('active').siblings().removeClass('active')
})