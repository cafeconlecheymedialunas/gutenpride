<?php
/**
 * Plugin Name:       Notion Blocks
 * Description:       A series of Gutenberg Blocks to show any data from Notion
 * Version:           0.1.0
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       notion-blocks
 *
 * @package           notion
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
require_once 'vendor/autoload.php';

require_once __DIR__ . '/src/PluginInit.php';

define('PLUGIN_DIRECTORY_URL',__DIR__);
define('PLUGIN_SLUG', "notion-blocks");

define('NOTION_SECRET',"secret_uPBBR6snphU8rKertMWty82DqrUNgGcVe4PJf5fCCSi");

PluginInit::get_instance()->run();


function filter_block_categories_when_post_provided( $block_categories, $editor_context ) {
    if ( ! empty( $editor_context->post ) ) {
        array_push(
            $block_categories,
            array(
                'slug'  => "notion-blocks",
                'title' => __( 'Notion Blocks', PLUGIN_SLUG ),
                'icon'  => null,
            )
        );
    }
    return $block_categories;
}

add_filter( 'block_categories_all', 'filter_block_categories_when_post_provided', 10, 2 );