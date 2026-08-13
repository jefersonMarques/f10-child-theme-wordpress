(function ($) {
    'use strict';

    const container = $('[data-f10-author-avatar]');

    if (!container.length || typeof wp === 'undefined' || !wp.media) {
        return;
    }

    const input = container.find('[data-f10-author-avatar-input]');
    const preview = container.find('[data-f10-author-avatar-preview]');
    const fallbackInitials = container.data('f10-author-initials') || 'F10';
    let mediaFrame = null;

    container.on('click', '[data-f10-author-avatar-select]', function () {
        if (mediaFrame) {
            mediaFrame.open();
            return;
        }

        mediaFrame = wp.media({
            title: 'Selecionar foto do autor',
            button: {
                text: 'Usar esta foto'
            },
            library: {
                type: 'image'
            },
            multiple: false
        });

        mediaFrame.on('select', function () {
            const attachment = mediaFrame.state().get('selection').first().toJSON();
            const availableSizes = attachment.sizes || {};
            const selectedPreview = availableSizes['f10-author-avatar']
                || availableSizes.medium
                || availableSizes.thumbnail
                || availableSizes.medium_large;
            const imageUrl = selectedPreview ? selectedPreview.url : attachment.url;

            input.val(attachment.id);
            preview.html(
                $('<img>', {
                    src: imageUrl,
                    alt: '',
                    class: 'f10-author-avatar'
                })
            );
        });

        mediaFrame.open();
    });

    container.on('click', '[data-f10-author-avatar-remove]', function () {
        input.val('');
        preview.html(
            $('<span>', {
                class: 'f10-author-avatar f10-author-avatar--fallback',
                text: fallbackInitials
            })
        );
    });
})(jQuery);
