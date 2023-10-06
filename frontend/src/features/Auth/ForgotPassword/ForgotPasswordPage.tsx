import ForgotPasswordForm from './ForgotPasswordForm';
import AuthFormHeader from '../components/AuthFormHeader';
import AuthNavBar from '../components/AuthNavBar';
import AuthPageLeftColumn from '../components/AuthPageLeftColumn';

export default function ForgotPasswordPage() {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            <AuthPageLeftColumn/>
            <div className="flex-1 flex flex-col lg:gap-8 items-center relative">
                <AuthNavBar path="/login" />
                <div className="flex-grow py-4 w-full flex justify-center items-center">
                    <div className="w-4/5 md:w-3/5">
                        <AuthFormHeader
                            title="Forgot your password?"
                            subTitle="Provide account email address for a reset link"
                        />
                        <ForgotPasswordForm />
                    </div>
                </div>
            </div>
        </div>
    );
}