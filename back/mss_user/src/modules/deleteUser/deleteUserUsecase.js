import { User } from '../../shared/domain/entities/user.js';
import { NoItemsFound } from '../../shared/helpers/errors/usecaseErrors.js';
import { EntityError } from '../../shared/helpers/errors/domainErrors.js';

export class DeleteUserUsecase {
	constructor(repo) {
		this.repo = repo;
	}

	async call(id) {
		if (!User.validateUserId(id)) {
			throw new EntityError('userId');
		}

		const user = await this.repo.deleteUser(id);
		if (user === null) {
			throw new NoItemsFound('userId');
		}

		return user;
	}
}
