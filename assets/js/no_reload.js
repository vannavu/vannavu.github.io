$(document).ready(function(){
    bindLinks();
})

$(window).on("popstate", function(e) {
    // When the browser goes back replace the content and title
    $('title').html(e.originalEvent.state.title)
    $('#content').html(e.originalEvent.state.content)
})

function bindLinks(){
    $("a[href^='/']").on('click', function(e){
        // Stop link from activating
        e.preventDefault()

        // Get the URL to load
        url = $(this).attr('href')

        // Send a Get request to the URL
        $.get(url, function(data){
            // Get the title of the new page
            regex = /(.*)<\/title>/g
            newTitle = regex.exec(data)[1]

            // Set the title to the new title
            $('title').html(newTitle)

            // Replace the content
            $('#content').html($(data).find('#content').html())

            // Push a new state to the browser
            history.pushState({
                'title': $('title').html(),
                'content': $('#content').html()
            }, newTitle, url)

            // Re Bind to all the links on the page
            bindLinks()
        })
    })
    var url = window.location.href;
    console.log(url);
    if (url == 'http://localhost:4000/') {
      $("body").css({
        'background':'black'
      });
    }
    else if (url == 'http://localhost:4000/about/') {
      $("body").css({
        'background':'purple'
      });
    }
}
