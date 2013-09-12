$(function() {
	$('.wtf-status-btn').click(function() {
		var node = $('#issue_status_id'),
			id = $(this).data('id');
		node.attr('value', id);
		$('#issue-form').submit();
	});
});
