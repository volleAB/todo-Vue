import '../assets/styles/footer.less'

export default {
    data() {
        return {
            author: 'volleAB'
        }
    },
    render() {
        return (
            // [].map(())
            <div id="footer">
                <span>Written by {this.author}</span>
            </div>
        )
    }
}