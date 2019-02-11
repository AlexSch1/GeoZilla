import $ from 'jquery'

$(document).ready(function () {
  $('.popUpCall').click(function () {
    var popUpName = $(this).data('pop_up')
    popUping(popUpName)
    return false
  })

  function popUping (_popUpName) {
    console.log($(_popUpName))
    $('html, body').addClass('pop_up_cond')
    $(_popUpName).addClass('pop_up_active')
  }

  $('.pop_up__toggle').click(function () {
    $(this).closest('.pop_up__wr').removeClass('pop_up_active')
    $('html, body').removeClass('pop_up_cond')
    return false
  })

  document.getElementById('FileAttachment').onchange = function () {
    document.getElementById('fileuploadurl').value = this.value.replace(/C:\\fakepath\\/i, '')
  }

  $('.send_request [name="e-mail"], .send_request textarea').on('click', function () {
    $(this).closest('.pop_up__input_wr').find('.pop_up__warm_text_chose').removeClass('pop_up__warm_text_no_choose')
    $(this).closest('.pop_up__input_wr').find('.pop_up__warm_text_valid').removeClass('pop_up__warm_text_no_valid')
  })

  $('.select__wr').click(function () {
    $(this).closest('.pop_up__input_wr').find('.pop_up__warm_text_chose').removeClass('pop_up__warm_text_no_choose')
  })

  $('.btn.pop_up__input_btn').click(function (e) {
    $('.select__wr').each(function (i) {
      if ($(this).find('input[type="radio"]:checked').length === 0) {
        $(this).closest('.pop_up__input_wr').find('.pop_up__warm_text_chose').addClass('pop_up__warm_text_no_choose')
        e.preventDefault()
      } else {
        if ($(this).find('input[type="radio"]:checked').hasClass('default')) {
          $(this).closest('.pop_up__input_wr').find('.pop_up__warm_text_chose').addClass('pop_up__warm_text_no_choose')
          e.preventDefault()
        }
      }
    })
    var trigger = true
    var _this = $('.send_request [name="e-mail"]')
    if ($(_this).val() === '') {
      $(_this).closest('.pop_up__input_wr').find('.pop_up__warm_text_chose').addClass('pop_up__warm_text_no_choose')
      $(_this).closest('.pop_up__input_wr').find('.pop_up__warm_text_valid').removeClass('pop_up__warm_text_no_valid')
      e.preventDefault()
    } else {
      if (!validate(_this, trigger)) {
        $(_this).closest('.pop_up__input_wr').find('.pop_up__warm_text_valid').addClass('pop_up__warm_text_no_valid')
        trigger = false
      }
    }
    if ($('.send_request textarea').val() === '') {
      $('.send_request textarea').closest('.pop_up__input_wr').find('.pop_up__warm_text_chose').addClass('pop_up__warm_text_no_choose')
      e.preventDefault()
    }
    // if (!validate(_this, trigger)) {
    //   trigger = false
    // }
    // if (!trigger) return false
    // if (!trigger) {
    //   console.log('false')
    // } else {
    //   console.log('true')
    // }
    if (!trigger) return false
  })

  function validate (_this, trigger) {
    var ckName = /^[А-Яа-яA-Za-z\s]{1,20}$/
    var ckText = /^[А-Яа-яA-Za-z0-9,.!?\s]{1,5000}$/
    var ckTel = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
    var ckNumber = /^\d+$/
    var ckDate = /^(\d{1,2}).(\d{1,2}).(\d{2}|\d{4})$/
    var ckEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    var type = $(_this).attr('type')
    if (type === 'number') {
      if (!ckNumber.test($(_this).val())) {
        return false
      } else {
        return true
      }
    } if (type === 'text') {
      if (!ckText.test($(_this).val())) {
        return false
      } else {
        return true
      }
    } if (type === 'password') {
      if (!ckText.test($(_this).val())) {
        return false
      } else {
        return true
      }
    } if (type === 'date') {
      if (!ckDate.test($(_this).val())) {
        return false
      } else {
        return true
      }
    } if (type === 'e-mail') {
      if (!ckEmail.test($(_this).val())) {
        return false
      } else {
        return true
      }
    } if (type === 'tel') {
      if (!ckTel.test($(_this).val())) {
        return false
      } else {
        return true
      }
    } if (type === 'name') {
      if (!ckName.test($(_this).val())) {
        return false
      } else {
        return true
      }
    } else {
      return true
    }
  }
  // validate()
})
