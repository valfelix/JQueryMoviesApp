/* Part Two - Movies App!
Build an application that uses jQuery to do the following:
When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.
When the button to remove is clicked, remove each title and rating from the DOM.
*/

$(document).ready(function() {

    $('form').on('submit', event => {
        event.preventDefault();

        let title = $('#title').val();
        let rating = $('#rating').val();
        let movie = { title, rating };
        const createMovie = movieRow(movie);

        $('tbody').append(createMovie);
        $('form').trigger('reset');
    });

    const movieRow = input => {
        return `
            <tr>
                <td> ${input.title} </td>
                <td> ${input.rating} </td>
                <td> <button class='btn'> Delete </button> </td>
            <tr>
        `
    };

    $('.table').on('click', '.btn', function(){
        $(this).closest('tr').remove();
    });

})

