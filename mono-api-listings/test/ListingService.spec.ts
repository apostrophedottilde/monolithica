import { hello } from '../server/hello-world';
import { expect} from 'chai';
import 'mocha';
import {ListingServiceImpl} from "../server/services/ListingServiceImpl";

describe('ListingServiceImpl', () => {

    it('should return hello world', () => {
        const result = hello();
        expect(result).to.equal('Hello world!');
    });

    describe('find All', () => {
        it('should return all listings regardless of type', () => {
            // given
            const listingService = new ListingServiceImpl();
            // when
            let promise = listingService.all('5bd4f30c684077004d05610e',null, null);

            //then
            expect(promise).to.equal({dddd:'hbjhbj'});
        });
    });

});