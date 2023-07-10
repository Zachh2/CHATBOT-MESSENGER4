"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serviceManager_1 = require("../serviceManager");
const Debug = require("debug");
const configuration_1 = require("../configuration");
const fs_1 = require("fs");
class DependenciesFeature {
    constructor() {
        this.logger = Debug('axm:features:dependencies');
    }
    init() {
        this.transport = serviceManager_1.ServiceManager.get('transport');
        this.logger('init');
        const pkgPath = configuration_1.default.findPackageJson();
        if (typeof pkgPath !== 'string')
            return this.logger('failed to found pkg.json path');
        this.logger(`found pkg.json in ${pkgPath}`);
        fs_1.readFile(pkgPath, (err, data) => {
            if (err)
                return this.logger(`failed to read pkg.json`, err);
            try {
                const pkg = JSON.parse(data.toString());
                if (typeof pkg.dependencies !== 'object') {
                    return this.logger(`failed to find deps in pkg.json`);
                }
                const dependencies = Object.keys(pkg.dependencies)
                    .reduce((list, name) => {
                    list[name] = { version: pkg.dependencies[name] };
                    return list;
                }, {});
                this.logger(`collected ${Object.keys(dependencies).length} dependencies`);
                this.transport.send('application:dependencies', dependencies);
                this.logger('sent dependencies list');
            }
            catch (err) {
                return this.logger(`failed to parse pkg.json`, err);
            }
        });
    }
    destroy() {
        this.logger('destroy');
    }
}
exports.DependenciesFeature = DependenciesFeature;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jaWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2ZlYXR1cmVzL2RlcGVuZGVuY2llcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNEQUFrRDtBQUNsRCwrQkFBOEI7QUFHOUIsb0RBQTRDO0FBQzVDLDJCQUE2QjtBQUs3QixNQUFhLG1CQUFtQjtJQUFoQztRQUdVLFdBQU0sR0FBYSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQTtJQWtDL0QsQ0FBQztJQWhDQyxJQUFJO1FBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRywrQkFBYyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRW5CLE1BQU0sT0FBTyxHQUFHLHVCQUFhLENBQUMsZUFBZSxFQUFFLENBQUE7UUFDL0MsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRO1lBQUUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLCtCQUErQixDQUFDLENBQUE7UUFFcEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsT0FBTyxFQUFFLENBQUMsQ0FBQTtRQUMzQyxhQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO1lBQzlCLElBQUksR0FBRztnQkFBRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMseUJBQXlCLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDM0QsSUFBSTtnQkFDRixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO2dCQUN2QyxJQUFJLE9BQU8sR0FBRyxDQUFDLFlBQVksS0FBSyxRQUFRLEVBQUU7b0JBQ3hDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO2lCQUN0RDtnQkFDRCxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUErQixDQUFDO3FCQUNsRSxNQUFNLENBQUMsQ0FBQyxJQUFvQixFQUFFLElBQVksRUFBRSxFQUFFO29CQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFBO29CQUNoRCxPQUFPLElBQUksQ0FBQTtnQkFDYixDQUFDLEVBQUUsRUFBb0IsQ0FBQyxDQUFBO2dCQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLGVBQWUsQ0FBQyxDQUFBO2dCQUN6RSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxZQUFZLENBQUMsQ0FBQTtnQkFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO2FBQ3RDO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLDBCQUEwQixFQUFFLEdBQUcsQ0FBQyxDQUFBO2FBQ3BEO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDeEIsQ0FBQztDQUNGO0FBckNELGtEQXFDQyJ9