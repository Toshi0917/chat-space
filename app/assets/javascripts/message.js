$(function(){
  function buildHTML(message){
    if (message.image) {
      let html =
      `<div class="message-area">
        <div class="message-area__user-status">
          <div class="message-area__user-status__name">
            ${message.user_name}
          </div>
          <div class="message-area__user-status__timestamp">
            ${message.created_at}
          </div>
        </div>
        <div class="message-area__message">
          <p class="message-area__message__body">
            ${message.body}
          </p>
            <img class="message-area__message__image" src=${message.image}>
        </div>
      </div>`
    return html;
    } else {
      let html =
      `<div class="message-area">
          <div class="message-area__user-status">
            <div class="message-area__user-status__name">
              ${message.user_name}
            </div>
            <div class="message-area__user-status__timestamp">
              ${message.created_at}
            </div>
          </div>
          <div class="message-area__message">
            <p class="message-area__message__body">
              ${message.body}
            </p>
          </div>
        </div>`
    return html;
    };
  }

  $('.form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.message-field').append(html);
      $('form')[0].reset();
      $('.message-field').animate({ scrollTop: $('.message-field')[0].scrollHeight});
      $('.form__send').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    })
  });
});