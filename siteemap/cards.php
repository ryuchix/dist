<?php echo '<?xml version="1.0" encoding="UTF-8"?>'; ?>
<?php header("Content-type: text/xml;charset=utf-8"); ?>
<?php 
    $json = file_get_contents('https://app.ragnarokmobile.net/api/sitemap/cards');
    $results = json_decode($json, true);
    $url = 'https://ragnarokmobile.net/card/';
?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <?php foreach($results['cards'] as $key => $result) : ?>
        <url>
            <loc><?= $url . $result['slug'] ?></loc>
            <lastmod><?= $result['updated_at'] ?></lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.6</priority>
        </url>
    <?php endforeach ?>
</urlset>