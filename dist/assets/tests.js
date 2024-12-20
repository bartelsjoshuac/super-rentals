'use strict';

define("super-rentals/tests/acceptance/super-rentals-test", ["qunit", "@ember/test-helpers", "super-rentals/tests/helpers"], function (_qunit, _testHelpers, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"@ember/test-helpers",0,"super-rentals/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Acceptance | super rentals', function (hooks) {
    (0, _helpers.setupApplicationTest)(hooks);
    (0, _qunit.test)('visiting /', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.strictEqual((0, _testHelpers.currentURL)(), '/');
      assert.dom('nav').exists();
      assert.dom('h1').hasText('SuperRentals');
      assert.dom('h2').hasText('Welcome to Super Rentals!');
      assert.dom('.jumbo a.button').hasText('About Us');
      await (0, _testHelpers.click)('.jumbo a.button');
      assert.strictEqual((0, _testHelpers.currentURL)(), '/about');
    });
    (0, _qunit.test)('viewing the details of a rental property', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.dom('.rental').exists({
        count: 3
      });
      await (0, _testHelpers.click)('.rental:first-of-type a');
      assert.strictEqual((0, _testHelpers.currentURL)(), '/rentals/grand-old-mansion');
    });
    (0, _qunit.test)('visiting /rentals/grand-old-mansion', async function (assert) {
      await (0, _testHelpers.visit)('/rentals/grand-old-mansion');
      assert.strictEqual((0, _testHelpers.currentURL)(), '/rentals/grand-old-mansion');
      assert.dom('nav').exists();
      assert.dom('h1').containsText('SuperRentals');
      assert.dom('h2').containsText('Grand Old Mansion');
      assert.dom('.rental.detailed').exists();
      assert.dom('.share.button').hasText('Share on Twitter');
      let button = (0, _testHelpers.find)('.share.button');
      let tweetURL = new URL(button.href);
      assert.strictEqual(tweetURL.host, 'twitter.com');
      assert.strictEqual(tweetURL.searchParams.get('url'), `${window.location.origin}/rentals/grand-old-mansion`);
    });
    (0, _qunit.test)('visiting /about', async function (assert) {
      await (0, _testHelpers.visit)('/about');
      assert.strictEqual((0, _testHelpers.currentURL)(), '/about');
      assert.dom('nav').exists();
      assert.dom('h1').hasText('SuperRentals');
      assert.dom('h2').hasText('About Super Rentals');
      assert.dom('.jumbo a.button').hasText('Contact Us');
      await (0, _testHelpers.click)('.jumbo a.button');
      assert.strictEqual((0, _testHelpers.currentURL)(), '/getting-in-touch');
    });
    (0, _qunit.test)('visiting /getting-in-touch', async function (assert) {
      await (0, _testHelpers.visit)('/getting-in-touch');
      assert.strictEqual((0, _testHelpers.currentURL)(), '/getting-in-touch');
      assert.dom('nav').exists();
      assert.dom('h1').hasText('SuperRentals');
      assert.dom('h2').hasText('Contact Us');
      assert.dom('.jumbo a.button').hasText('About');
      await (0, _testHelpers.click)('.jumbo a.button');
      assert.strictEqual((0, _testHelpers.currentURL)(), '/about');
    });
    (0, _qunit.test)('navigating using the nav-bar', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.dom('nav').exists();
      assert.dom('nav a.menu-index').hasText('SuperRentals');
      assert.dom('nav a.menu-about').hasText('About');
      assert.dom('nav a.menu-contact').hasText('Contact');
      await (0, _testHelpers.click)('nav a.menu-about');
      assert.strictEqual((0, _testHelpers.currentURL)(), '/about');
      await (0, _testHelpers.click)('nav a.menu-contact');
      assert.strictEqual((0, _testHelpers.currentURL)(), '/getting-in-touch');
      await (0, _testHelpers.click)('nav a.menu-index');
      assert.strictEqual((0, _testHelpers.currentURL)(), '/');
    });
  });
});
define("super-rentals/tests/helpers/index", ["exports", "ember-qunit"], function (_exports, _emberQunit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setupApplicationTest = setupApplicationTest;
  _exports.setupRenderingTest = setupRenderingTest;
  _exports.setupTest = setupTest;
  0; //eaimeta@70e063a35619d71f0,"ember-qunit"eaimeta@70e063a35619d71f
  // This file exists to provide wrappers around ember-qunit's
  // test setup functions. This way, you can easily extend the setup that is
  // needed per test type.

  function setupApplicationTest(hooks, options) {
    (0, _emberQunit.setupApplicationTest)(hooks, options);

    // Additional setup for application tests can be done here.
    //
    // For example, if you need an authenticated session for each
    // application test, you could do:
    //
    // hooks.beforeEach(async function () {
    //   await authenticateSession(); // ember-simple-auth
    // });
    //
    // This is also a good place to call test setup functions coming
    // from other addons:
    //
    // setupIntl(hooks, 'en-us'); // ember-intl
    // setupMirage(hooks); // ember-cli-mirage
  }
  function setupRenderingTest(hooks, options) {
    (0, _emberQunit.setupRenderingTest)(hooks, options);

    // Additional setup for rendering tests can be done here.
  }
  function setupTest(hooks, options) {
    (0, _emberQunit.setupTest)(hooks, options);

    // Additional setup for unit tests can be done here.
  }
});
define("super-rentals/tests/integration/components/jumbo-test", ["qunit", "super-rentals/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"super-rentals/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | jumbo', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders the content inside a jumbo header with a tomster', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Jumbo>Hello World</Jumbo>
      */
      {
        "id": "0hyUGoJ1",
        "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"Hello World\"]],[]]]]]],[],false,[\"jumbo\"]]",
        "moduleName": "C:\\gitlocal\\super-rentals\\super-rentals\\super-rentals\\tests\\integration\\components\\jumbo-test.js",
        "isStrictMode": false
      }));
      assert.dom('.jumbo').exists();
      assert.dom('.jumbo').hasText('Hello World');
      assert.dom('.jumbo .tomster').exists();
    });
  });
});
define("super-rentals/tests/integration/components/map-test", ["qunit", "super-rentals/tests/helpers", "@ember/test-helpers", "super-rentals/config/environment", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _environment, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"super-rentals/tests/helpers",0,"@ember/test-helpers",0,"super-rentals/config/environment",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | map', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders a map image for the specified parameters', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Map
            @lat="37.7797"
            @lng="-122.4184"
            @zoom="10"
            @width="150"
            @height="120"
          />
      */
      {
        "id": "3c4xkzmJ",
        "block": "[[[8,[39,0],null,[[\"@lat\",\"@lng\",\"@zoom\",\"@width\",\"@height\"],[\"37.7797\",\"-122.4184\",\"10\",\"150\",\"120\"]],null]],[],false,[\"map\"]]",
        "moduleName": "C:\\gitlocal\\super-rentals\\super-rentals\\super-rentals\\tests\\integration\\components\\map-test.js",
        "isStrictMode": false
      }));
      assert.dom('.map img').exists().hasAttribute('alt', 'Map image at coordinates 37.7797,-122.4184').hasAttribute('src').hasAttribute('width', '150').hasAttribute('height', '120');
      let {
        src
      } = (0, _testHelpers.find)('.map img');
      let token = encodeURIComponent(_environment.default.MAPBOX_ACCESS_TOKEN);
      assert.ok(src.startsWith('https://api.mapbox.com/'), 'the src starts with "https://api.mapbox.com/"');
      assert.ok(src.includes('-122.4184,37.7797,10'), 'the src should include the lng,lat,zoom parameter');
      assert.ok(src.includes('150x120@2x'), 'the src should include the width,height and @2x parameter');
      assert.ok(src.includes(`access_token=${token}`), 'the src should include the escaped access token');
    });
    (0, _qunit.test)('it updates the `src` attribute when the arguments change', async function (assert) {
      this.setProperties({
        lat: 37.7749,
        lng: -122.4194,
        zoom: 10,
        width: 150,
        height: 120
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Map
            @lat={{this.lat}}
            @lng={{this.lng}}
            @zoom={{this.zoom}}
            @width={{this.width}}
            @height={{this.height}}
          />
      */
      {
        "id": "YtR8gHWE",
        "block": "[[[8,[39,0],null,[[\"@lat\",\"@lng\",\"@zoom\",\"@width\",\"@height\"],[[30,0,[\"lat\"]],[30,0,[\"lng\"]],[30,0,[\"zoom\"]],[30,0,[\"width\"]],[30,0,[\"height\"]]]],null]],[],false,[\"map\"]]",
        "moduleName": "C:\\gitlocal\\super-rentals\\super-rentals\\super-rentals\\tests\\integration\\components\\map-test.js",
        "isStrictMode": false
      }));
      let img = (0, _testHelpers.find)('.map img');
      assert.ok(img.src.includes('-122.4194,37.7749,10'), 'the src should include the lng,lat,zoom parameter');
      assert.ok(img.src.includes('150x120@2x'), 'the src should include the width,height and @2x parameter');
      this.setProperties({
        width: 300,
        height: 200,
        zoom: 12
      });
      assert.ok(img.src.includes('-122.4194,37.7749,12'), 'the src should include the lng,lat,zoom parameter');
      assert.ok(img.src.includes('300x200@2x'), 'the src should include the width,height and @2x parameter');
      this.setProperties({
        lat: 47.6062,
        lng: -122.3321
      });
      assert.ok(img.src.includes('-122.3321,47.6062,12'), 'the src should include the lng,lat,zoom parameter');
      assert.ok(img.src.includes('300x200@2x'), 'the src should include the width,height and @2x parameter');
    });
    (0, _qunit.test)('the default alt attribute can be overridden', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Map
            @lat="37.7797"
            @lng="-122.4184"
            @zoom="10"
            @width="150"
            @height="120"
            alt="A map of San Francisco"
          />
      */
      {
        "id": "8Fd6ARqX",
        "block": "[[[8,[39,0],[[24,\"alt\",\"A map of San Francisco\"]],[[\"@lat\",\"@lng\",\"@zoom\",\"@width\",\"@height\"],[\"37.7797\",\"-122.4184\",\"10\",\"150\",\"120\"]],null]],[],false,[\"map\"]]",
        "moduleName": "C:\\gitlocal\\super-rentals\\super-rentals\\super-rentals\\tests\\integration\\components\\map-test.js",
        "isStrictMode": false
      }));
      assert.dom('.map img').hasAttribute('alt', 'A map of San Francisco');
    });
    (0, _qunit.test)('the src, width and height attributes cannot be overridden', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Map
            @lat="37.7797"
            @lng="-122.4184"
            @zoom="10"
            @width="150"
            @height="120"
            src="/assets/images/teaching-tomster.png"
            width="200"
            height="300"
          />
      */
      {
        "id": "Gum6YX94",
        "block": "[[[8,[39,0],[[24,\"src\",\"/assets/images/teaching-tomster.png\"],[24,\"width\",\"200\"],[24,\"height\",\"300\"]],[[\"@lat\",\"@lng\",\"@zoom\",\"@width\",\"@height\"],[\"37.7797\",\"-122.4184\",\"10\",\"150\",\"120\"]],null]],[],false,[\"map\"]]",
        "moduleName": "C:\\gitlocal\\super-rentals\\super-rentals\\super-rentals\\tests\\integration\\components\\map-test.js",
        "isStrictMode": false
      }));
      assert.dom('.map img').hasAttribute('src', /^https:\/\/api\.mapbox\.com\//).hasAttribute('width', '150').hasAttribute('height', '120');
    });
  });
});
define("super-rentals/tests/integration/components/rental-test", ["qunit", "super-rentals/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"super-rentals/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | rental', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders information about a rental property', async function (assert) {
      this.setProperties({
        rental: {
          id: 'grand-old-mansion',
          title: 'Grand Old Mansion',
          owner: 'Veruca Salt',
          city: 'San Francisco',
          location: {
            lat: 37.7749,
            lng: -122.4194
          },
          category: 'Estate',
          type: 'Standalone',
          bedrooms: 15,
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
          description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
        }
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Rental @rental={{this.rental}} />
      */
      {
        "id": "OMDNN8Rb",
        "block": "[[[8,[39,0],null,[[\"@rental\"],[[30,0,[\"rental\"]]]],null]],[],false,[\"rental\"]]",
        "moduleName": "C:\\gitlocal\\super-rentals\\super-rentals\\super-rentals\\tests\\integration\\components\\rental-test.js",
        "isStrictMode": false
      }));
      assert.dom('article').hasClass('rental');
      assert.dom('article h3').hasText('Grand Old Mansion');
      assert.dom('article h3 a').hasAttribute('href', '/rentals/grand-old-mansion');
      assert.dom('article .detail.owner').includesText('Veruca Salt');
      assert.dom('article .detail.type').includesText('Standalone');
      assert.dom('article .detail.location').includesText('San Francisco');
      assert.dom('article .detail.bedrooms').includesText('15');
      assert.dom('article .image').exists();
      assert.dom('article .map').exists();
    });
  });
});
define("super-rentals/tests/integration/components/rental/detailed-test", ["qunit", "super-rentals/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"super-rentals/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | rental/detailed', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.setProperties({
        rental: {
          id: 'grand-old-mansion',
          title: 'Grand Old Mansion',
          owner: 'Veruca Salt',
          city: 'San Francisco',
          location: {
            lat: 37.7749,
            lng: -122.4194
          },
          category: 'Estate',
          type: 'Standalone',
          bedrooms: 15,
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
          description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
        }
      });
    });
    (0, _qunit.test)('it renders a header with a share button', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Rental::Detailed @rental={{this.rental}} />
      */
      {
        "id": "P8MAB1AI",
        "block": "[[[8,[39,0],null,[[\"@rental\"],[[30,0,[\"rental\"]]]],null]],[],false,[\"rental/detailed\"]]",
        "moduleName": "C:\\gitlocal\\super-rentals\\super-rentals\\super-rentals\\tests\\integration\\components\\rental\\detailed-test.js",
        "isStrictMode": false
      }));
      assert.dom('.jumbo').exists();
      assert.dom('.jumbo h2').containsText('Grand Old Mansion');
      assert.dom('.jumbo p').containsText('a nice place to stay near San Francisco');
      assert.dom('.jumbo a.button').containsText('Share on Twitter');
    });
    (0, _qunit.test)('it renders detailed information about a rental property', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Rental::Detailed @rental={{this.rental}} />
      */
      {
        "id": "P8MAB1AI",
        "block": "[[[8,[39,0],null,[[\"@rental\"],[[30,0,[\"rental\"]]]],null]],[],false,[\"rental/detailed\"]]",
        "moduleName": "C:\\gitlocal\\super-rentals\\super-rentals\\super-rentals\\tests\\integration\\components\\rental\\detailed-test.js",
        "isStrictMode": false
      }));
      assert.dom('article').hasClass('rental');
      assert.dom('article h3').containsText('About Grand Old Mansion');
      assert.dom('article .detail.owner').containsText('Veruca Salt');
      assert.dom('article .detail.type').containsText('Standalone – Estate');
      assert.dom('article .detail.location').containsText('San Francisco');
      assert.dom('article .detail.bedrooms').containsText('15');
      assert.dom('article .image').exists();
      assert.dom('article .map').exists();
    });
  });
});
define("super-rentals/tests/integration/components/rental/image-test", ["qunit", "super-rentals/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"super-rentals/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | rental/image', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders the given image', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Rental::Image
              src="/assets/images/teaching-tomster.png"
              alt="Teaching Tomster"
            />
          
      */
      {
        "id": "w0Dbqw6e",
        "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,\"src\",\"/assets/images/teaching-tomster.png\"],[24,\"alt\",\"Teaching Tomster\"]],null,null],[1,\"\\n    \"]],[],false,[\"rental/image\"]]",
        "moduleName": "C:\\gitlocal\\super-rentals\\super-rentals\\super-rentals\\tests\\integration\\components\\rental\\image-test.js",
        "isStrictMode": false
      }));
      assert.dom('.image img').exists().hasAttribute('src', '/assets/images/teaching-tomster.png').hasAttribute('alt', 'Teaching Tomster');
    });
    (0, _qunit.test)('clicking on the component toggles its size', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Rental::Image
              src="/assets/images/teaching-tomster.png"
              alt="Teaching Tomster"
            />
          
      */
      {
        "id": "w0Dbqw6e",
        "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,\"src\",\"/assets/images/teaching-tomster.png\"],[24,\"alt\",\"Teaching Tomster\"]],null,null],[1,\"\\n    \"]],[],false,[\"rental/image\"]]",
        "moduleName": "C:\\gitlocal\\super-rentals\\super-rentals\\super-rentals\\tests\\integration\\components\\rental\\image-test.js",
        "isStrictMode": false
      }));
      assert.dom('button.image').exists();
      assert.dom('.image').doesNotHaveClass('large');
      assert.dom('.image small').hasText('View Larger');
      await (0, _testHelpers.click)('button.image');
      assert.dom('.image').hasClass('large');
      assert.dom('.image small').hasText('View Smaller');
      await (0, _testHelpers.click)('button.image');
      assert.dom('.image').doesNotHaveClass('large');
      assert.dom('.image small').hasText('View Larger');
    });
  });
});
define("super-rentals/tests/integration/components/rentals-test", ["qunit", "super-rentals/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"super-rentals/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | rentals', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.setProperties({
        rentals: [{
          id: 'grand-old-mansion',
          title: 'Grand Old Mansion',
          owner: 'Veruca Salt',
          city: 'San Francisco',
          location: {
            lat: 37.7749,
            lng: -122.4194
          },
          category: 'Estate',
          type: 'Standalone',
          bedrooms: 15,
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
          description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
        }, {
          id: 'urban-living',
          title: 'Urban Living',
          owner: 'Mike Teavee',
          city: 'Seattle',
          location: {
            lat: 47.6062,
            lng: -122.3321
          },
          category: 'Condo',
          type: 'Community',
          bedrooms: 1,
          image: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Seattle_-_Barnes_and_Bell_Buildings.jpg',
          description: 'A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.'
        }, {
          id: 'downtown-charm',
          title: 'Downtown Charm',
          owner: 'Violet Beauregarde',
          city: 'Portland',
          location: {
            lat: 45.5175,
            lng: -122.6801
          },
          category: 'Apartment',
          type: 'Community',
          bedrooms: 3,
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
          description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
        }]
      });
    });
    (0, _qunit.test)('it renders all given rental properties by default', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Rentals @rentals={{this.rentals}} />
      */
      {
        "id": "0wTvyCxN",
        "block": "[[[8,[39,0],null,[[\"@rentals\"],[[30,0,[\"rentals\"]]]],null]],[],false,[\"rentals\"]]",
        "moduleName": "C:\\gitlocal\\super-rentals\\super-rentals\\super-rentals\\tests\\integration\\components\\rentals-test.js",
        "isStrictMode": false
      }));
      assert.dom('.rentals').exists();
      assert.dom('.rentals input').exists();
      assert.dom('.rentals .results').exists();
      assert.dom('.rentals .results li').exists({
        count: 3
      });
      assert.dom('.rentals .results li:nth-of-type(1)').containsText('Grand Old Mansion');
      assert.dom('.rentals .results li:nth-of-type(2)').containsText('Urban Living');
      assert.dom('.rentals .results li:nth-of-type(3)').containsText('Downtown Charm');
    });
    (0, _qunit.test)('it updates the results according to the search query', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Rentals @rentals={{this.rentals}} />
      */
      {
        "id": "0wTvyCxN",
        "block": "[[[8,[39,0],null,[[\"@rentals\"],[[30,0,[\"rentals\"]]]],null]],[],false,[\"rentals\"]]",
        "moduleName": "C:\\gitlocal\\super-rentals\\super-rentals\\super-rentals\\tests\\integration\\components\\rentals-test.js",
        "isStrictMode": false
      }));
      assert.dom('.rentals').exists();
      assert.dom('.rentals input').exists();
      await (0, _testHelpers.fillIn)('.rentals input', 'Downtown');
      assert.dom('.rentals .results').exists();
      assert.dom('.rentals .results li').exists({
        count: 1
      });
      assert.dom('.rentals .results li').containsText('Downtown Charm');
      await (0, _testHelpers.fillIn)('.rentals input', 'Mansion');
      assert.dom('.rentals .results').exists();
      assert.dom('.rentals .results li').exists({
        count: 1
      });
      assert.dom('.rentals .results li').containsText('Grand Old Mansion');
    });
  });
});
define("super-rentals/tests/integration/components/share-button-test", ["qunit", "super-rentals/tests/helpers", "@ember/service", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _service, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"super-rentals/tests/helpers",0,"@ember/service",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  const MOCK_URL = new URL('/foo/bar?baz=true#some-section', window.location.origin);
  class MockRouterService extends _service.default {
    get currentURL() {
      return '/foo/bar?baz=true#some-section';
    }
  }
  (0, _qunit.module)('Integration | Component | share-button', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.owner.register('service:router', MockRouterService);
      this.tweetParam = param => {
        let link = (0, _testHelpers.find)('a');
        let url = new URL(link.href);
        return url.searchParams.get(param);
      };
    });
    (0, _qunit.test)('basic usage', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ShareButton>Tweet this!</ShareButton>
      */
      {
        "id": "KmUVeK83",
        "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"Tweet this!\"]],[]]]]]],[],false,[\"share-button\"]]",
        "moduleName": "C:\\gitlocal\\super-rentals\\super-rentals\\super-rentals\\tests\\integration\\components\\share-button-test.js",
        "isStrictMode": false
      }));
      assert.dom('a').hasAttribute('target', '_blank').hasAttribute('rel', 'external nofollow noopener noreferrer').hasAttribute('href', /^https:\/\/twitter\.com\/intent\/tweet/).hasClass('share').hasClass('button').containsText('Tweet this!');
      assert.strictEqual(this.tweetParam('url'), MOCK_URL.href);
    });
    (0, _qunit.test)('it supports passing @text', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ShareButton @text="Hello Twitter!">Tweet this!</ShareButton>
      */
      {
        "id": "CuDasEQF",
        "block": "[[[8,[39,0],null,[[\"@text\"],[\"Hello Twitter!\"]],[[\"default\"],[[[[1,\"Tweet this!\"]],[]]]]]],[],false,[\"share-button\"]]",
        "moduleName": "C:\\gitlocal\\super-rentals\\super-rentals\\super-rentals\\tests\\integration\\components\\share-button-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual(this.tweetParam('text'), 'Hello Twitter!');
    });
    (0, _qunit.test)('it supports passing @hashtags', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ShareButton @hashtags="foo,bar,baz">Tweet this!</ShareButton>
      */
      {
        "id": "8R/jR8C1",
        "block": "[[[8,[39,0],null,[[\"@hashtags\"],[\"foo,bar,baz\"]],[[\"default\"],[[[[1,\"Tweet this!\"]],[]]]]]],[],false,[\"share-button\"]]",
        "moduleName": "C:\\gitlocal\\super-rentals\\super-rentals\\super-rentals\\tests\\integration\\components\\share-button-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual(this.tweetParam('hashtags'), 'foo,bar,baz');
    });
    (0, _qunit.test)('it supports passing @via', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ShareButton @via="emberjs">Tweet this!</ShareButton>
      */
      {
        "id": "e3cVhuEI",
        "block": "[[[8,[39,0],null,[[\"@via\"],[\"emberjs\"]],[[\"default\"],[[[[1,\"Tweet this!\"]],[]]]]]],[],false,[\"share-button\"]]",
        "moduleName": "C:\\gitlocal\\super-rentals\\super-rentals\\super-rentals\\tests\\integration\\components\\share-button-test.js",
        "isStrictMode": false
      }));
      assert.strictEqual(this.tweetParam('via'), 'emberjs');
    });
    (0, _qunit.test)('it supports adding extra classes', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ShareButton class="extra things">Tweet this!</ShareButton>
      */
      {
        "id": "vYXKiVwV",
        "block": "[[[8,[39,0],[[24,0,\"extra things\"]],null,[[\"default\"],[[[[1,\"Tweet this!\"]],[]]]]]],[],false,[\"share-button\"]]",
        "moduleName": "C:\\gitlocal\\super-rentals\\super-rentals\\super-rentals\\tests\\integration\\components\\share-button-test.js",
        "isStrictMode": false
      }));
      assert.dom('a').hasClass('share').hasClass('button').hasClass('extra').hasClass('things');
    });
    (0, _qunit.test)('the target, rel and href attributes cannot be overridden', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ShareButton target="_self" rel="" href="/">Not a Tweet!</ShareButton>
      */
      {
        "id": "nGh9xvb4",
        "block": "[[[8,[39,0],[[24,\"target\",\"_self\"],[24,\"rel\",\"\"],[24,6,\"/\"]],null,[[\"default\"],[[[[1,\"Not a Tweet!\"]],[]]]]]],[],false,[\"share-button\"]]",
        "moduleName": "C:\\gitlocal\\super-rentals\\super-rentals\\super-rentals\\tests\\integration\\components\\share-button-test.js",
        "isStrictMode": false
      }));
      assert.dom('a').hasAttribute('target', '_blank').hasAttribute('rel', 'external nofollow noopener noreferrer').hasAttribute('href', /^https:\/\/twitter\.com\/intent\/tweet/);
    });
  });
});
define("super-rentals/tests/test-helper", ["super-rentals/app", "super-rentals/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"super-rentals/app",0,"super-rentals/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit"eaimeta@70e063a35619d71f
  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define("super-rentals/tests/unit/models/rental-test", ["super-rentals/tests/helpers", "qunit"], function (_helpers, _qunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"super-rentals/tests/helpers",0,"qunit"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Model | rental', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it has the right type', function (assert) {
      const store = this.owner.lookup('service:store');
      let rental = store.createRecord('rental', {
        id: 'grand-old-mansion',
        title: 'Grand Old Mansion',
        owner: 'Veruca Salt',
        city: 'San Francisco',
        location: {
          lat: 37.7749,
          lng: -122.4194
        },
        category: 'Estate',
        bedrooms: 15,
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
        description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
      });
      assert.strictEqual(rental.type, 'Standalone');
      rental.category = 'Condo';
      assert.strictEqual(rental.type, 'Community');
      rental.category = 'Townhouse';
      assert.strictEqual(rental.type, 'Community');
      rental.category = 'Apartment';
      assert.strictEqual(rental.type, 'Community');
      rental.category = 'Estate';
      assert.strictEqual(rental.type, 'Standalone');
    });
  });
});
define('super-rentals/config/environment', [], function() {
  var prefix = 'super-rentals';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('super-rentals/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
