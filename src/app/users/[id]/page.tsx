import {GetServerSidePropsContext} from 'next';
import {UserController} from "@/infrastructure/controllers/UserController";
import {UserModel} from "@/models/UserModel";

const userController = new UserController();

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const id = context.params?.id as string;
	const user = await userController.getUserById(id);
	return {
		props: {user},
	};
}

const UserPage = ({user}: { user: UserModel }) => {
	return (
		<div>
			<h1>{user.name}</h1>
			<p>{user.email}</p>
		</div>
	);
};

export default UserPage;
