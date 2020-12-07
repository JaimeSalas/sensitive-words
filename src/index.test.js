import sensitiveWords from '.'

test('replaces blacklisted words with asterisks', () => (
    expect(sensitiveWords('The name of the NX will be Nintendo Switch', ['switch']))
        .toBe('The name of the NX will be Nintendo ***')
));

test('replaces multiple instances of blacklisted words', () => (
    expect(sensitiveWords('The name of the NX will be Nintendo Switch. The Switch will be awesome', ['switch']))
        .toBe('The name of the NX will be Nintendo ***. The *** will be awesome')
));