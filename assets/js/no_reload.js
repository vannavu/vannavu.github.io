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
            regex = /(.*)/g
            newTitle = regex.exec(data)[1]

            // Set the title to the new title
            $('title').html(newTitle)

            // Replace the content
            $('main').html($(data).find('main').html())

            // Push a new state to the browser
            history.pushState({
                'title': $('title').html(),
                'main': $('main').html()
            }, newTitle, url)
            // Re Bind to all the links on the page
            bindLinks()
        })
    })
}
